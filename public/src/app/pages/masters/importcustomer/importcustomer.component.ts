import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { Http,Headers } from '@angular/http';
import * as moment from 'moment'
import { MatDialog } from '@angular/material';
import { Customer } from '../customer';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'importcustomer',
  templateUrl: './importcustomer.component.html',
  styleUrls: ['./importcustomer.component.scss']
})
export class ImportcustomerComponent implements OnInit {

  customer : Customer = {};
  user : User = {};
  disable:boolean=true;
  rowsCompleted=0;
  totalRows=0;
  arrayBuffer:any;
  file:File;
  temp: any[]=[];

  constructor(private dialog:MatDialog, private auth:AuthService, private http:Http, private customerService:CustomerService) { }

  getDownloadFormat()
  {
    window.open("http://www.yourfleetman.com/importExcel/customerFormat",'_blank') //change domain
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  incomingfile(event) 
  {
     this.file= event.target.files[0]; 
     this.disable=false;
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user = data[0]
    })
    this.setDefault()
  }

  Upload() {
    let fileReader = new FileReader();
      fileReader.onload = () => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          this.temp=XLSX.utils.sheet_to_json(worksheet,{raw:true});
      }
      fileReader.readAsArrayBuffer(this.file);
    setTimeout(()=>{
      this.totalRows=this.temp.length
      if(this.totalRows>0)
      {
        this.disable=true;
        this.log();
      }
      else
      {
        window.alert("There are no rows to be inserted")
      }
    },1000)
  }

  observables:any[]=[]
  invalidData:any[]=[]
  i=0;
  progressBarValue=0;
  async log()
  {
    this.i=0;
    for await (const element of this.temp)
    {
      this.i++;
      const res=await this.compute(element)
      this.rowsCompleted=this.i;
      this.progressBarValue=((this.rowsCompleted/this.totalRows)*100)
    }
  }

  async compute(element)
  {
    if(element["Name"]==undefined)
    {
      this.customer.name = '';
      this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.name = element["Name"]
    }

    if(element["Address"]==undefined)
    {
      this.customer.caddress = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.caddress = element["Address"]
    }

    if(element["State"]==undefined)
    {
      this.customer.state = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.state = element["State"]
    }

    if(element["Customer Group"]==undefined)
    {
      this.customer.custGroup=''
      this.customer.customerGroupId = null;
    }
    else
    {
      var temp=
      {
        ownerId : this.user.ownerId,
        cGroup : element["Customer Group"]
      }
      await this.getCustomerGroupId(temp).subscribe(data=>{
        if(data.length > 0)
        {
          this.customer.custGroup = element["Customer Group"]
          this.customer.customerGroupId = data[0].id
        }
        else
        {
          this.customer.custGroup=''
          this.customer.customerGroupId = null;
        }
      })
    }

    if(element["Phone Number"]==undefined)
    {
      this.customer.phone = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.phone = element["Phone Number"]
    }

    if(element["Email"]==undefined)
    {
      this.customer.email = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.email = element["Email"]
    }

    if(element["PAN Number"]==undefined)
    {
      this.customer.panNo = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.panNo = element["PAN Number"]
    }

    if(element["GSTIN Number"]==undefined)
    {
      this.customer.gstin = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.gstin = element["GSTIN Number"]
    }

    if(element["TDS percentage"]==undefined)
    {
      this.customer.tdsPercent = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.tdsPercent = element["TDS percentage"]
    }

    if(element["Contract Start Date"]==undefined)
    {
      this.customer.contractSDate = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      var sDate = element["Contract Start Date"];
      this.customer.contractSDate = moment(sDate).format("YYYY-MM-DD");
    }

    if(element["Surcharge Percentage"]==undefined)
    {
      this.customer.surchargePercent = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.surchargePercent = element["Surcharge Percentage"]
    }

    // if(element["Alternate Phone Number"]==undefined)
    // {
    //   this.customer.surchargePercent = '';
    //   // this.invalidData.push("Row number: "+this.i);
    // }
    // else
    // {
    //   this.customer.surchargePercent = element["Alternate Phone Number"]
    // }

    if(element["GST Type"]==undefined)
    {
      this.customer.billingGSTType = '';
      // this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.customer.billingGSTType = element["GST Type"];
    }

    if(this.customer.name!='')
    {
      this.customer.ownerId = this.user.ownerId
      await this.customerService.addCustomer(this.customer).toPromise().then(res=>{
        this.setDefault()
      })
    }

  }

  getCustomerGroupId(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/importExcel/getCustomerGroupId',temp,{headers:headers}).map(res => res.json());
  }

  setDefault()
  {
    this.customer = {
      //Customer Details
      ownerId:'',
      name:'',
      caddress:'', 
      state:'', 
      custGroup:'', 
      customerGroupId:null,
      phone:'', 
      email:'',
      panNo:'',
      gstin:'', 
      tdsPercent:'', 
      contractSDate:'',
      surchargePercent:'', 
      baseCityForFuel:'',   
      //GSTin details 
      billingName:'',
      billingAddress:'',
      billingState:'',
      billingPhone:'',
      billingEmail:'',
      billingServiceTax:'',
      billingGSTType:'',
      billingReverseChargeApplicable:'',
      billingContractEndDate:'',
      billingForcedFuel:'',
      //Applicable taxes
      applicableTaxes:0,
      //Driver Allowance
      earlyTime:'',
      lateTime:'',
      //Misc
      notes:'',
      enableCustomPricing:'',
      denyBookbyPassenger:'',
      active:true,
      //Temp
      date:'',
      status:'',
      // public editable: boolean = false
    }
  }
}
