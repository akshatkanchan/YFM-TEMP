import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Price } from '../../masters/pricing/price';
import { DutyType } from '../../masters/dutytype/duty-type';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { DatePipe } from '@angular/common';
import { DutyTypeService } from '../../masters/dutytype/duty-type.service';
import { DutiesService } from '../duties.service';
import { PricingService } from '../../masters/pricing/pricing.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import * as moment from 'moment'
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { ClosedutyComponent } from '../closeduty/closeduty.component';
import { BusinesssettingService } from '../../circles/businesssetting/businesssetting.service';
import { DriverService } from '../../masters/new-driver/driver.service';
import { FileuploadService } from '../../../fileupload.service';

@Component({
  selector: 'close-supplier-duty',
  templateUrl: './close-supplier-duty.component.html',
  styleUrls: ['./close-supplier-duty.component.scss']
})
export class CloseSupplierDutyComponent implements OnInit {

  details:any;
  myForm:FormGroup;
  user:User={}
  closeDuty:any={
    startDate:'',
    endDate:'',
    startTime:'',
    endTime:'',
    startKm:'',
    endKm:'',
    extraHrRate:'',
    extraKmRate:'',
    finalPrice:'',
    ownerId:'',
    dutyId:''
  }
  dutyId:any={
    id:null
  }
  dutyType:Observable<DutyType[]>;
  businessSettings: BusinessSettings = {}
  driverAllowanceType: any;
  driverAllowanceAmount: number = 0;
  drivers: any;
  startDate: any;

  constructor(
    private dialog:MatDialogRef<ClosedutyComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dutyTypeService:DutyTypeService,
    private dutiesService:DutiesService,
    private pricingService: PricingService,
    private snackbar:MatSnackBar,
    private auth:AuthService,
    private businessSettingService: BusinesssettingService,
    private driverService: DriverService,
    private uploadService : FileuploadService
  ) { 
    this.details=data.row;
    this.startDate=moment(this.details.startDate).day();    
    console.log(this.details);
    this.closeDuty.startTime=moment(this.details.reportingTime, "HH:mm a").format("HH:mm");
    this.closeDuty.startDate=this.details.startDate
  }
  
  ngOnInit() {

    this.auth.user.subscribe(data=>{
      
      this.user=data[0]

      this.dutyTypeService.getDutyType(this.user).subscribe(data=>{
        this.dutyType=data;
      });

      this.auth.businessSettings.subscribe(data => {
        this.businessSettings = data;

        var temp = {
          ownerId: this.user.ownerId,
          businessSettingsId: this.businessSettings.id
        }

        this.businessSettingService.getChargedDriverAllowances(temp).subscribe(data => {
          this.driverAllowanceType = data;
        })
      })


    })
    this.driverService.findDriver(this.details).subscribe(data => {
      console.log(data)
      this.drivers = data[0]
    })
    this.myForm=this.fb.group({
      rows:this.fb.array([])
    });
    this.getCustomerId().subscribe(data=>{
      this.temp.customerId=data[0].id
      this.temp.city=this.details.fromLoc;
      this.temp.dutyTypeId=this.details.dutyTypeId;
      this.temp.vehicleGroupId=this.details.vehicleGroupId;
      this.getPrice()
    })
  }

  getCustomerId() {
    const customer={
      name:this.details.cname
    }
    return this.dutiesService.getCustomer(customer)
  }
  
  totalHours;
  totalDays;
  getDetails() {
    let sDate=this.closeDuty.startDate;
    let eDate=this.closeDuty.endDate;
    let stime="T"+this.closeDuty.startTime+":00Z";
    let etime="T"+this.closeDuty.endTime+":00Z";
    let startDate=new Date(sDate+stime);
    let endDate=new Date(eDate+etime);
    this.totalHours=(moment(endDate).diff(startDate,'hours'))
    this.totalDays=(moment(endDate).diff(startDate,'days'))
  }

  calculatePrice() {
    console.log(this.closeDuty.startKm)
    if(this.closeDuty.endDate == '' || this.closeDuty.startTime == '' || this.closeDuty.endTime == '' || this.closeDuty.startKm == '' || this.closeDuty.endKm == '') {
      this.snackbar.open("Required fields are empty","",{duration:2000})
    }
    else {
      this.getDetails()
      var DutyType;
      this.getDutyType().subscribe(data=>{
        console.log(data)
        DutyType=data;
        this.fillPrices(DutyType[0]);
      })
      this.getPrice()
      this.addExtraCharges();
    }    
  }
  addExtraCharges() {
   
    this.myForm.value.forEach(element => {
     console.log(element);
   });
  }
  fillPrices(temp:any) {
      if(temp.dType==="Flat Rate")
      {
        this.closeDuty.finalPrice=this.price.baseRate
      }
      else if(temp.dType==="HR-KM(Local)")
      {
        let maxKm:number=temp.maxKms;
        let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
        let maxHrs:number=temp.maxHrs;
        this.closeDuty.finalPrice=this.price.baseRate;
        if(endKm>maxKm)
        {
          this.closeDuty.finalPrice+=((endKm-maxKm)*this.price.extraKm)
        }
        if(this.totalHours>maxHrs)
        {
          this.closeDuty.finalPrice+=((this.totalHours-maxHrs)*this.price.extraHrs)
        }
      }
      else if(temp.dType==="Day-KM(Outstation)")
      {
        let maxKm:number=temp.maxKms;
        let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
        if(endKm>maxKm)
        {
          this.closeDuty.finalPrice=this.price.baseRate+((endKm-maxKm)*this.price.extraKm)
        }
        else
        {
          this.closeDuty.finalPrice=this.price.baseRate
        }
        console.log(this.closeDuty.finalPrice)
      }
      else if(temp.dType==="Long Duration - Total Km & HR (Monthly Bookings)")
      {
          let maxDays=temp.maxDays
          let maxHrs=temp.maxHrs
          let maxKm=temp.maxKms
          let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
          if(endKm>maxKm || this.totalDays>maxDays || this.totalHours>maxHrs)
          {
            this.closeDuty.finalPrice=this.price.baseRate+((endKm-maxKm)*this.price.extraKm)+((this.totalHours-maxHrs)*this.price.extraHrs)+((this.totalDays-maxDays)*24*this.price.extraHrs)
          }
          else
          {
             this.closeDuty.finalPrice=this.price.baseRate
          }
      }
      else if(temp.dType===" Long Duration-Total KM Daily HR(Monthly Bookings) ")
      {

      }
  }

  temp:any=
  {
    city:'',
    vehicleGroupId:'',
    customerId:'',
    dutyTypeId:''
  }

  price:Price={
    baseRate:0,
    extraKm:0,
    extraHrs:0,
  }
close() {
  if(this.closeDuty.finalPrice === '') { 
    this.snackbar.open("Please enter price","X",{duration:4000})
  } else if(this.closeDuty.endDate === '') {
    this.snackbar.open("Please enter end date","X",{duration:4000})
  } else if(this.closeDuty.startTime === '') {
    this.snackbar.open("Please enter start time","X",{duration:4000})
  } else if(this.closeDuty.endTime === '') {
    this.snackbar.open("Please enter end time","X",{duration:4000})
  } else if(this.closeDuty.startKm === '') {
    this.snackbar.open("Please enter start KM","X",{duration:4000})
  } else if(this.closeDuty.endKm === '') {
    this.snackbar.open("Please enter end KM","X",{duration:4000})
  } else {
    var i = 0;
    this.closeDuty.endDate=moment(this.closeDuty.endDate).format("YYYY-MM-DD")
    this.details.endDate=moment(this.closeDuty.endDate).format("YYYY-MM-DD")
    
    this.details.status="Completed";
    this.details.price=this.closeDuty.finalPrice
    this.dutiesService.updateDutiesClose(this.details);
    this.closeDuty.dutyId=this.details.id;
    this.closeDuty.ownerId = this.user.ownerId;
    this.closeDuty.bookyId=this.details.bid;
    this.dutiesService.closeduties(this.closeDuty).subscribe(data=>{
      if(this.details.ownerDId!=null){
        this.closeDuty.dutyId=this.details.ownerDId;
        this.closeDuty.ownerId=this.user.ownerId;
        this.dutiesService.closeduties(this.closeDuty).subscribe(()=>{
        })
      }
      this.invoiceForms.value.forEach(element => {
        element.ownerId = this.user.ownerId;
        element.dutyId = this.details.id;
        
        
        var imageName = element.imageName+element.name+".jpg"
  
        // console.log(this.user.ownerId)
  
        var tempArr = {
          ownerId : this.user.ownerId,
          dutyId : this.details.id,
          name : element.name,
          charges : element.charges,
          fileName : element.imageName+element.name+".jpg"
        }
        this.dutiesService.closedutiesExtras(tempArr).subscribe(data=>{})
        if(this.imgUrl[i]!=null)
          this.upload(imageName,this.imgUrl[i])
        i=i+1;
      });
      this.closeBooking()
    });
  this.dialog.close("yes");
  
  
  }
}
closeBooking()
{
  this.dutiesService.checkIfBookingComplete('bid',this.details.bid).subscribe(data=>{
    var temp=true;
    data.forEach(element => {
      if(element.cnt > 0) {
        console.log("inside")
        temp=false;
      }
    
    });

    if(temp==true) {
      console.log("outside")
      this.dutiesService.completeBooking(this.details.bid).subscribe(()=>{
        this.dutiesService.updateTotalPrice(this.details.bid)
      });;
    }
  });
  if(this.details.supplierBId!=null) {
    this.dutiesService.completeBooking(this.details.supplierBId).subscribe(()=>{
  })
}

}
  getPrice() {
    console.log(this.temp)
     this.pricingService.getCustomerPrice(this.temp).subscribe(
       data=>
       {
         if(data[0])
         {
           console.log(data[0])
            this.price.baseRate=data[0].baseRate;
            this.price.extraHrs=data[0].extraHrs;
            this.price.extraKm=data[0].extraKm;
            this.closeDuty.extraHrRate=data[0].extraHrs;
            this.closeDuty.extraKmRate=data[0].extraKm;
         }
         else
         {
           this.snackbar.open("Prices not entered","",{duration:2000})
         }
       }
     )
  }

  get invoiceForms()
  {
    return this.myForm.get('rows') as FormArray
  }

  getDutyType()
  { 
    
    const temp={
      id:this.details.dutyTypeId
    }
    return  this.dutiesService.getDutyType(temp);
  }

  /////////////////////Extras/////////////////////////////////
  addRow()
  {
 
    const row = this.fb.group({
      name:'',
      charges:'',
      fileName: '',
      imageName: ''      
    })
    
    this.invoiceForms.push(row);

    this.invoiceForms.controls.forEach(element=>{
      console.log(element)
    })
  }

  deleteRow(i){
    this.invoiceForms.removeAt(i);
    this.imgUrl.splice(i,1);
  }

  imgUrl : any[] =[];
  selectedFiles: FileList

  imageSelect(event,row,i)
  {
    console.log("hi")
    this.selectedFiles = event.target.files;
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgUrl[i]=reader.result

    row.get('imageName').setValue(this.details.id+'_'+i+'_')
    
    reader.readAsDataURL(file);
  }

  upload(filename,imgUrl)
  {
    this.uploadService.uploadfile(this.user.companyName,'closeDutyExtras',filename,imgUrl);
  }

  closeDialog()
  {
    this.dialog.close("no");
  }
}