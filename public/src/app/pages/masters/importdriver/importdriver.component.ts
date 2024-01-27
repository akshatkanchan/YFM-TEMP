import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { Http,Headers } from '@angular/http';
import * as moment from 'moment'
import { MatDialog } from '@angular/material';
import { Driver } from '../new-driver/driver';
import { DriverService } from '../new-driver/driver.service';

@Component({
  selector: 'importdriver',
  templateUrl: './importdriver.component.html',
  styleUrls: ['./importdriver.component.scss']
})
export class ImportdriverComponent implements OnInit {

  driver : Driver = {};
  user : User = {};
  disable:boolean=true;
  rowsCompleted=0;
  totalRows=0;
  arrayBuffer:any;
  file:File;
  temp: any[]=[];

  constructor(private dialog:MatDialog, private auth:AuthService, private http:Http, private driverService:DriverService) { }

  getDownloadFormat()
  {
    window.open("http://www.yourfleetman.com/importExcel/driverFormat",'_blank') //change domain
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
      this.driver.name = '';
      this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.driver.name = element["Name"]
    }

    if(element["Mobile Number"]==undefined)
    {
      this.driver.mobileNumber = '';
      this.invalidData.push("Row number: "+this.i);
    }
    else
    {
      this.driver.mobileNumber = element["Mobile Number"]
    }

    if(element["Alternate Number"]==undefined)
    {
      this.driver.alternateNumber = '';
    }
    else
    {
      this.driver.alternateNumber = element["Alternate Number"]
    }

    if(element["PAN Number"]==undefined)
    {
      this.driver.panCardNumber = '';
    }
    else
    {
      this.driver.panCardNumber = element["PAN Number"]
    }

    if(element["Aadhar Number"]==undefined)
    {
      this.driver.aadharCardNumber = '';
    }
    else
    {
      this.driver.aadharCardNumber = element["Aadhar Number"]
    }

    if(element["Birth Date"]==undefined)
    {
      this.driver.birthDate = '';
    }
    else
    {
      var bDate = element["Birth Date"];
      this.driver.birthDate = moment(bDate).format("YYYY-MM-DD");
    }

    if(element["Joining Date"]==undefined)
    {
      this.driver.joiningDate = '';
    }
    else
    {
      var jDate = element["Joining Date"];
      this.driver.joiningDate = moment(jDate).format("YYYY-MM-DD");
    }

    if(element["Salary Per Month"]==undefined)
    {
      this.driver.salaryPerMonth = '';
    }
    else
    {
      this.driver.salaryPerMonth = element["Salary Per Month"];
    }

    if(element["Branch"]==undefined)
    {
      this.driver.branches = '';
      this.driver.branchId = '';
    }
    else
    {
      var temp = {
        ownerId : this.user.ownerId,
        branchName : element["Branch"]
      }

      await this.getBranchId(temp).subscribe(data=>{
        if(data.length>0)
        {
          this.driver.branches = element["Branch"];
          this.driver.branchId = data[0].id
        }
        else
        {
          this.driver.branches = '';
          this.driver.branchId = '';
        }
      })
    }

    if(element["Permanent Address"]==undefined)
    {
      this.driver.permanentAddress = '';
    }
    else
    {
      this.driver.permanentAddress = element["Permanent Address"];
    }

    if(element["Current Address"]==undefined)
    {
      this.driver.currentAddress = '';
    }
    else
    {
      this.driver.currentAddress = element["Current Address"];
    }

    if(element["License Number"]==undefined)
    {
      this.driver.licenseNumber = '';
    }
    else
    {
      this.driver.licenseNumber = element["License Number"];
    }

    if(element["License Valid Upto"]==undefined)
    {
      this.driver.licenseValidUpto = '';
    }
    else
    {
      var lDate = element["License Valid Upto"];
      this.driver.licenseValidUpto = moment(lDate).format("YYYY-MM-DD");
    }

    if(element["Daily Allowances"]==undefined)
    {
      this.driver.dailyAllowance = '';
    }
    else
    {
      this.driver.dailyAllowance = element["Daily Allowances"];
    }

    if(element["Overtime per hour"]==undefined)
    {
      this.driver.overTimePerHour = '';
    }
    else
    {
      this.driver.overTimePerHour = element["Overtime per hour"];
    }

    if(element["Outstation Allowance"]==undefined)
    {
      this.driver.outstationAllowancePerDay = '';
    }
    else
    {
      this.driver.outstationAllowancePerDay = element["Outstation Allowance"];
    }

    if(element["Outstation Overnight Allowance"]==undefined)
    {
      this.driver.outstationOvernightAllowance = '';
    }
    else
    {
      this.driver.outstationOvernightAllowance = element["Outstation Overnight Allowance"];
    }

    if(element["Second Extra Duty"]==undefined)
    {
      this.driver.secondDuty = '';
    }
    else
    {
      this.driver.secondDuty = element["Second Extra Duty"];
    }

    if(element["Third Duty"]==undefined)
    {
      this.driver.thirdDuty = '';
    }
    else
    {
      this.driver.thirdDuty = element["Third Duty"];
    }

    if(element["Fourth Duty"]==undefined)
    {
      this.driver.fourthDuty = '';
    }
    else
    {
      this.driver.fourthDuty = element["Fourth Duty"];
    }

    if(element["Fifth Duty"]==undefined)
    {
      this.driver.fifthDuty = '';
    }
    else
    {
      this.driver.fifthDuty = element["Fifth Duty"];
    }

    if(element["Working hours Start"]==undefined)
    {
      this.driver.workingHoursStart = '';
    }
    else
    {
      this.driver.workingHoursStart = element["Working hours Start"];
    }

    if(element["Working hours End"]==undefined)
    {
      this.driver.workingHoursEnd = '';
    }
    else
    {
      this.driver.workingHoursEnd = element["Working hours End"];
    }

    if(this.driver.name!='' && this.driver.mobileNumber!='' )
    {
      this.driver.ownerId = this.user.ownerId;
      await this.driverService.addDriver(this.driver).toPromise().then(res=>{
        this.setDefault()
      })
    }

  }

  getBranchId(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/importExcel/getBranchId',temp,{headers:headers}).map(res => res.json());
  }

  setDefault()
  {
    this.driver = {
      name:'',
      mobileNumber:'',
      alternateNumber:'',
      panCardNumber:'',
      aadharCardNumber:'',
      birthDate:'',
      joiningDate:'',
      salaryPerMonth:'',
      branches:'',
      branchId:'',
      addressType:'',
      permanentAddress:'',
      currentAddress:'',
      dailyAllowance:'',
      overTimeAllowance:'',
      overTimePerHour:'',
      outstationAllowancePerDay:'',
      outstationOvernightAllowance:'',
      extraDutyAllowance:'',
      //extra duty
      secondDuty:'',
      thirdDuty:'',
      fourthDuty:'',
      fifthDuty:'',
      //license
      licenseNumber:'',
      licenseValidUpto:'',
      workingHoursStart:'',
      workingHoursEnd:'',    
      fileName:'',
      licenseFileName: '',
      aadharFileName: '',
      panFileName: '',
      isContractor: false,
      active: true,
      ownerId:'',
    }
  }


}
