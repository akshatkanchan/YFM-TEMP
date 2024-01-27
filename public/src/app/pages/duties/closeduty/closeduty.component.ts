import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { DutiesService } from '../duties.service';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment'
import { DutyTypeService } from '../../masters/dutytype/duty-type.service';
import { DutyType } from '../../masters/dutytype/duty-type';
import { PricingService } from '../../masters/pricing/pricing.service';
import { Price } from '../../masters/pricing/price';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { BusinesssettingService } from '../../circles/businesssetting/businesssetting.service';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { DriverService } from '../../masters/new-driver/driver.service';
import { FileuploadService } from '../../../fileupload.service';
import { BillingService } from '../../operations/new-billing/billing.service';
import { Billing } from '../../operations/new-billing/billing';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Http } from '@angular/http';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-closeduty',
  templateUrl: './closeduty.component.html',
  styleUrls: ['./closeduty.component.scss']
})
export class ClosedutyComponent implements OnInit {

  details:any;
  supplierDetails: any;
  myForm:FormGroup;
  supplierForm:FormGroup;
  user:User={}
  closeDuty:any={
    startDate:'',
    endDate:'',
    startTime:'',
    endTime:'',
    startKm:0,
    endKm:0,
    extraHrRate:0,
    extraKmRate:0,
    finalPrice:0,
    ownerId:'',
    dutyId:'',
    remarks: '',
    dutySlipFileName: ''
  }
  supplierCloseDuty:any={
    startDate:'',
    endDate:'',
    startTime:'',
    endTime:'',
    startKm:0,
    endKm:0,
    extraHrRate:0,
    extraKmRate:0,
    finalPrice:0,
    ownerId:'',
    dutyId:'',
    remarks: '',
    dutySlipFileName: ''
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
  supplierStartDate: any;
  billingItems:Observable<String[]>;
  billingItem:any[]=[];
  totalKMS: number = 0;
  supplierTotalKMS: number = 0;
  extraCharges: any;
  supplierExtraCharges: any;
  days: number;
  allowances: any[] = [];
  supplierAllowances: any[] = [];
  editDutySlip: boolean = false;
  supplierEditDutySlip: boolean = false;
  imgDutySlipUrl:any = '';
  previousImgDutySlipUrl:any= ''
  imgDutySlip: File;
  imgDutySlipName: any;
  supplierImgDutySlipUrl:any = '';
  supplierPreviousImgDutySlipUrl:any= ''
  supplierImgDutySlip: File;
  supplierImgDutySlipName: any;
  totalKM: number = 0;
  totalTime: any = '';
  extraKM: number = 0;
  extraTime: any = '';
  extraKMCost: number = 0;
  extraTimeCost: number = 0;
  supplierTotalKM: number = 0;
  supplierTotalTime: any = '';
  supplierExtraKM: number = 0;
  supplierExtraTime: any = '';
  supplierExtraKMCost: number = 0;
  supplierExtraTimeCost: number = 0;
  companyName: any;

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
    private uploadService : FileuploadService,
    private billingService:BillingService,
    private http: Http,
    private companyprofileService: CompanyprofileService,
    private _sanitizer : DomSanitizer,
  ) {
    this.details=data.row;
    this.myConstructor();
  }

  async myConstructor() {
    if(this.data.row.ownerDId != null) {
      await this.dutiesService.getDutyById({id: this.details.ownerDId}).subscribe(data => {
        console.log(data);      
        this.companyprofileService.getCompanyProfile({ownerId: data[0].ownerId}).subscribe(data => {
          this.companyName = data[0].name;
        })
      })
    }
    await this.dutiesService.getDutyById({id: this.details.supplierDId}).subscribe(data => {
      console.log(data);      
      this.companyprofileService.getCompanyProfile({ownerId: data[0].ownerId}).subscribe(data => {
        this.companyName = data[0].name;
      })
      if(data.length > 0) {
        this.supplierDetails=data[0];
        console.log(this.supplierDetails);
        this.supplierCloseDuty.extraHrRate=this.supplierDetails.extraHours;
        this.supplierCloseDuty.extraKmRate=this.supplierDetails.extraKms;
        this.dutiesService.getCloseDutyDetails(this.supplierDetails).subscribe(async data => {
          console.log(data);
          this.supplierCloseDuty.startDate = moment(data[0].startDate).format("YYYY-MM-DD");
          this.supplierCloseDuty.endDate = moment(data[0].endDate).format("YYYY-MM-DD");
          this.supplierCloseDuty.startTime = moment(data[0].startTime, "HH:mm a").format("HH:mm");
          this.supplierCloseDuty.endTime = moment(data[0].endTime, "HH:mm a").format("HH:mm");
          this.supplierCloseDuty.startKm = data[0].startKm;
          this.supplierCloseDuty.endKm = data[0].endKm;
          this.supplierCloseDuty.extraHrRate = data[0].extraHrRate;
          this.supplierCloseDuty.extraKmRate = data[0].extraKmRate;
          this.supplierCloseDuty.finalPrice = data[0].finalPrice;
          this.supplierStartDate = moment(data[0].startDate).day();
          this.supplierTotalKMS = Number(this.supplierCloseDuty.endKm)-Number(this.supplierCloseDuty.startKm);
          this.supplierEditDutySlip = true;
          this.supplierCloseDuty.id = data[0].id;
          this.supplierCloseDuty.dutyId = this.details.id;
          this.supplierCloseDuty.ownerId = this.details.ownerId;
          this.supplierCloseDuty.dutySlipFileName = data[0].dutySlipFileName;
        
          this.dutiesService.getEndedCloseDutyAdditionalCharges(this.supplierDetails).subscribe(data => {
            console.log(data);
            this.supplierExtraCharges = data;
            var j = 0;
            this.supplierExtraCharges.forEach(element => {
              console.log(element);
              if(element.fileName != 'undefined' && element.fileName != null) {
                this.uploadService.getFile(this.companyName,'closeDutyPics/Pictures/'+this.supplierDetails.id,element.fileName).subscribe(data => {
                  console.log(data);
                
                  this.supplierImgUrl[j] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ data.text());
                  this.supplierImgUrl[j] = this.supplierImgUrl[j].changingThisBreaksApplicationSecurity;
                
                  const row = this.fb.group({
                    id: element.id,
                    name: element.name,
                    charges: element.charges,
                    fileName: '',
                  })
                  this.supplierInvoiceForms.push(row);
                  j=j+1;  
                })
                this.uploadService.getPresignedUrl(this.companyName,element.fileName,'closeDutyPics/Pictures/'+this.supplierDetails.id).subscribe(data => {
                  element.url = data._body;
                })
              }
            });
          })

          if(this.supplierCloseDuty.dutySlipFileName!='' && this.supplierCloseDuty.dutySlipFileName!=null) {
            await this.uploadService.getFile(this.companyName,'dutySlip/'+this.supplierDetails.id,this.supplierCloseDuty.dutySlipFileName).subscribe(data=>{
              console.log(data);
              
              if(data.text().includes("%PDF-")) {
                this.supplierImgDutySlipUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());
                this.supplierImgDutySlipName = this.supplierCloseDuty.dutySlipFileName;
                this.supplierImgDutySlipUrl = this.supplierImgDutySlipUrl.changingThisBreaksApplicationSecurity;
              }
              else {
                this.supplierImgDutySlipUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                + data.text());
                this.supplierImgDutySlipUrl = this.supplierImgDutySlipUrl.changingThisBreaksApplicationSecurity;
              }
            })
          }          
        })
      }
    })
    console.log(this.details);
    this.closeDuty.extraHrRate=this.details.extraHours;
    this.closeDuty.extraKmRate=this.details.extraKms;
    // this.closeDuty.startTime=moment(this.details.reportingTime, "HH:mm a").format("HH:mm");
    // this.closeDuty.startDate=this.details.startDate;
    // this.dutiesService.getEndedCloseDutyDetails(this.details).subscribe(data=>{
    //   console.log(data);
    //   this.closeDuty.startDate=data[0].startDate;
    //   this.closeDuty.endDate=data[0].endDate;
    //   this.closeDuty.startTime=moment(data[0].startTime, "HH:mm a").format("HH:mm");
    //   this.closeDuty.endTime=moment(data[0].endTime, "HH:mm a").format("HH:mm");
    //   this.closeDuty.startKm = (Number(data[0].startKm)-toInteger(data[0].garageToReporting/1000));
    //   this.closeDuty.endKm = (Number(data[0].endKm)+toInteger(data[0].dropToGarage/1000));
    //   this.startDate=moment(data[0].startDate).day();
    //   this.totalKMS = Number(this.closeDuty.endKm)-Number(this.closeDuty.startKm);
    // })
    this.dutiesService.getCloseDutyDetails(this.details).subscribe(data => {
      console.log(data);
      this.closeDuty.startDate = moment(data[0].startDate).format("YYYY-MM-DD");
      this.closeDuty.endDate = moment(data[0].endDate).format("YYYY-MM-DD");
      this.closeDuty.startTime = moment(data[0].startTime, "HH:mm a").format("HH:mm");
      this.closeDuty.endTime = moment(data[0].endTime, "HH:mm a").format("HH:mm");
      this.closeDuty.startKm = data[0].startKm;
      this.closeDuty.endKm = data[0].endKm;
      this.closeDuty.extraHrRate = data[0].extraHrRate;
      this.closeDuty.extraKmRate = data[0].extraKmRate;
      this.closeDuty.finalPrice = data[0].finalPrice;
      this.startDate = moment(data[0].startDate).day();
      this.totalKMS = Number(this.closeDuty.endKm)-Number(this.closeDuty.startKm);
      this.editDutySlip = true;
      this.closeDuty.id = data[0].id;
      this.closeDuty.dutyId = this.details.id;
      this.closeDuty.ownerId = this.details.ownerId;
      this.closeDuty.dutySlipFileName = data[0].dutySlipFileName;

      if(this.closeDuty.dutySlipFileName!='' && this.closeDuty.dutySlipFileName!=null) {
        this.uploadService.getFile(this.user.companyName,'dutySlip/'+this.details.id,this.closeDuty.dutySlipFileName).subscribe(data=>{
          console.log(data);
          
          if(data.text().includes("%PDF-")) {
            this.imgDutySlipUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());
            this.imgDutySlipName = this.closeDuty.dutySlipFileName;
            this.imgDutySlipUrl = this.imgDutySlipUrl.changingThisBreaksApplicationSecurity;
          }
          else {
            this.imgDutySlipUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.imgDutySlipUrl = this.imgDutySlipUrl.changingThisBreaksApplicationSecurity;
          }
        })
      }
    })
    this.dutiesService.getEndedCloseDutyAdditionalCharges(this.details).subscribe(data=>{
      console.log(data);
      this.extraCharges = data;
      var j = 0;
      this.extraCharges.forEach(element => {
        console.log(element);
        if(element.fileName != 'undefined' && element.fileName != null) {
          this.uploadService.getFile(this.user.companyName,'closeDutyPics/Pictures/'+this.details.id,element.fileName).subscribe(data => {
            console.log(data);
          
            this.imgUrl[j] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ data.text());
            this.imgUrl[j] = this.imgUrl[j].changingThisBreaksApplicationSecurity;
          
            const row = this.fb.group({
              id: element.id,
              name: element.name,
              charges: element.charges,
              fileName: '',
            })
            this.invoiceForms.push(row);
            j=j+1;  
          })
          this.uploadService.getPresignedUrl(this.user.companyName,element.fileName,'closeDutyPics/Pictures/'+this.data.row.id).subscribe(data => {
            element.url = data._body;
          })
        }
      });
    })
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
        this.billingService.getBilling(this.user).subscribe(data => {
          this.billingItem=data;
          this.billingItems=Observable.of(this.billingItem);
          console.log(this.billingItem)
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
    this.supplierForm=this.fb.group({
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

  filterBillingItem(i:any)
  {
    if(this.billingItem.length>0)
    {
        this.billingItems=this.invoiceForms.at(i).get('name').valueChanges
        .pipe(
          startWith(''),
          map(val => this.filterBillingItems(val))
        );
    } 
  }
  filterBillingItems(val){
    return this.billingItem.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  getCustomerId() {
    const customer={
      name:this.details.cname
    }
    return this.dutiesService.getCustomer(customer)
  }
  
  totalDays;
  totalHours;
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
    console.log(this.closeDuty.extraHrRate, this.closeDuty.extraKmRate)
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
        this.addDriverAllowance(DutyType[0]);
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
    var startTime = moment(moment(this.closeDuty.startDate).format("YYYY-MM-DD")+" "+this.closeDuty.startTime, "YYYY-MM-DD HH:mm a");
    var endTime = moment(moment(this.closeDuty.endDate).format("YYYY-MM-DD")+" "+this.closeDuty.endTime,"YYYY-MM-DD HH:mm a");

    // this.closeDuty.endTime= moment(this.closeDuty.endTime, "HH:mm a");
    // this.closeDuty.startTime=moment(this.closeDuty.startTime, "HH:mm a");

    var totalHrs = endTime.diff(startTime,'hours')
    var totalMins = endTime.diff(startTime,'minutes');

    var clearMins = totalMins % 60;

    this.totalTime = totalHrs+"hrs "+clearMins+"mins"
    
    this.totalKM = this.closeDuty.endKm - this.closeDuty.startKm;
    if(temp.maxHrs == '' || totalHrs < temp.maxHrs) {
      this.extraTime = 0;
    }
    else {
      this.extraTime =(totalHrs-temp.maxHrs)+"hrs "+clearMins+"mins"
    }
    if(temp.maxKms == '') {
      this.extraKM = 0;
    }
    else if(temp.maxKms < this.totalKM) {
      this.extraKM = Number(this.totalKM) - Number(temp.maxKms);
    }

    if(this.closeDuty.extraKmRate != null || this.closeDuty.extraHrRate != null)
    {
      if(temp.dType==="Flat Rate")
      {
        this.closeDuty.finalPrice=this.details.price
      }
      else if(temp.dType==="HR-KM(Local)")
      {
        let maxKm:number=temp.maxKms;
        let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
        let maxHrs:number=temp.maxHrs;
        this.closeDuty.finalPrice=this.details.price;
        if(endKm>maxKm)
        {
          this.extraKMCost = ((endKm-maxKm)*this.closeDuty.extraKmRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.closeDuty.extraKmRate),
            fileName: '',                
          })          
        }
        if(this.totalHours>maxHrs)
        {
          this.extraTimeCost = ((this.totalHours-maxHrs)*this.closeDuty.extraHrRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Hrs',
            charges: ((this.totalHours-maxHrs)*this.closeDuty.extraHrRate),
            fileName: '',                
          })          
        }
      }
      else if(temp.dType==="Day-KM(Outstation)")
      {
        let maxKm:number=temp.maxKms;
        let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
        if(endKm>maxKm)
        {
          this.extraKMCost = ((endKm-maxKm)*this.closeDuty.extraKmRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.closeDuty.extraKmRate),
            fileName: '',                
          })          
        }
        
        this.closeDuty.finalPrice=this.details.price
        
        console.log(this.closeDuty.finalPrice)
      }
      else if(temp.dType==="Long Duration - Total Km & HR (Monthly Bookings)")
      {
        let maxDays=temp.maxDays
        let maxHrs=temp.maxHrs
        let maxKm=temp.totalKms
        let endKm:number = 0
        let totalTime:number = 0
        this.dutiesService.countIncompleteDuties(this.details).subscribe(data => {
          if(data[0].cnt == 1) {
            this.dutiesService.getTotalKms(this.details).subscribe(data => {
              endKm = data[0].diff;
            })
            this.dutiesService.getTotalSeconds(this.details).subscribe(data => {
              totalTime = (data[0].seconds/3600)
            })
          }
        })
          
        if(endKm>maxKm)
        {
          this.extraKMCost = ((endKm-maxKm)*this.closeDuty.extraKmRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.closeDuty.extraKmRate),
            fileName: '',                
          })            
        }
        // if(this.totalDays>maxDays || this.totalHours>maxHrs)
        if(totalTime>maxHrs)
        {
          this.extraTimeCost = ((totalTime-maxHrs)*this.closeDuty.extraHrRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Hrs',
            charges: ((totalTime-maxHrs)*this.closeDuty.extraHrRate),
            fileName: '',                
          })
        }
      
        this.closeDuty.finalPrice=this.details.price
        
      }
      else if(temp.dType===" Long Duration-Total KM Daily HR(Monthly Bookings) ")
      {
        let maxDays=temp.maxDays
        let maxHrs=temp.maxHrs
        let maxKm=temp.totalKms
        let endKm:number = 0
        this.dutiesService.countIncompleteDuties(this.details).subscribe(data => {
          if(data[0].cnt == 1) {
            this.dutiesService.getTotalKms(this.details).subscribe(data => {
              endKm = data[0].diff;
            })
          }
        })
          
        if(endKm>maxKm)
        {
          this.extraKMCost = ((endKm-maxKm)*this.closeDuty.extraKmRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.closeDuty.extraKmRate),
            fileName: '',                
          })            
        }
        if(this.totalDays>maxDays || this.totalHours>maxHrs)
        // if(totalTime>maxHrs)
        {
          this.extraTimeCost = ((this.totalHours-maxHrs)*this.closeDuty.extraHrRate)+((this.totalDays-maxDays)*24*this.closeDuty.extraHrRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Hrs',
            charges: ((this.totalHours-maxHrs)*this.closeDuty.extraHrRate)+((this.totalDays-maxDays)*24*this.closeDuty.extraHrRate),
            fileName: '',                
          })
        }
      
        this.closeDuty.finalPrice=this.details.price
      }
    }
    else{
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
          this.extraKMCost = ((endKm-maxKm)*this.price.extraKm);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.price.extraKm),
            fileName: '',                
          })          
        }
        if(this.totalHours>maxHrs)
        {
          this.extraTimeCost = ((this.totalHours-maxHrs)*this.price.extraHrs);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Hrs',
            charges: ((this.totalHours-maxHrs)*this.price.extraHrs),
            fileName: '',
          })          
        }
      }
      else if(temp.dType==="Day-KM(Outstation)")
      {
        let maxKm:number=temp.maxKms;
        let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
        if(endKm>maxKm)
        {
          this.extraKMCost = ((endKm-maxKm)*this.price.extraKm);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.price.extraKm),
            fileName: '',
          })          
        }
        
          this.closeDuty.finalPrice=this.price.baseRate
        
        console.log(this.closeDuty.finalPrice)
      }
      else if(temp.dType==="Long Duration - Total Km and HR (Monthly Bookings)")
      {
          let maxDays=temp.maxDays
          let maxHrs=temp.maxHrs
          let maxKm=temp.totalKms
          let endKm:number = 0
          let totalTime:number = 0
          this.dutiesService.countIncompleteDuties(this.details).subscribe(data => {
            if(data[0].cnt == 1) {
              this.dutiesService.getTotalKms(this.details).subscribe(data => {
                endKm = data[0].diff;
              })
              this.dutiesService.getTotalSeconds(this.details).subscribe(data => {
                totalTime = (data[0].seconds/3600)
              })
            }
          })
          
          if(endKm>maxKm)
          {
            this.extraKMCost = ((endKm-maxKm)*this.price.extraKm);
            this.allowances.push({
              ownerId: this.user.id,
              dutyId: this.details.id,
              name: 'Extra Km',
              charges: ((endKm-maxKm)*this.price.extraKm),
              fileName: '',                
            })            
          }
          // if(this.totalDays>maxDays || this.totalHours>maxHrs)
          if(totalTime>maxHrs)
          {
            this.extraTimeCost = ((totalTime-maxHrs)*this.price.extraHrs);
            this.allowances.push({
              ownerId: this.user.id,
              dutyId: this.details.id,
              name: 'Extra Hrs',
              charges: ((totalTime-maxHrs)*this.price.extraHrs),
              fileName: '',                
            })
          }
        
        
             this.closeDuty.finalPrice=this.price.baseRate
        
      }
      else if(temp.dType===" Long Duration-Total KM Daily HR(Monthly Bookings) ")
      {
        let maxDays=temp.maxDays
        let maxHrs=temp.maxHrs
        let maxKm=temp.totalKms
        let endKm:number = 0
        this.dutiesService.countIncompleteDuties(this.details).subscribe(data => {
          if(data[0].cnt == 1) {
            this.dutiesService.getTotalKms(this.details).subscribe(data => {
              endKm = data[0].diff;
            })
          }
        })
          
        if(endKm>maxKm)
        {
          this.extraKMCost = ((endKm-maxKm)*this.closeDuty.extraKmRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.price.extraKm),
            fileName: '',                
          })            
        }
        if(this.totalDays>maxDays || this.totalHours>maxHrs)
        // if(totalTime>maxHrs)
        {
          this.extraTimeCost = ((this.totalHours-maxHrs)*this.closeDuty.extraHrRate);
          this.allowances.push({
            ownerId: this.user.id,
            dutyId: this.details.id,
            name: 'Extra Hrs',
            charges: ((this.totalHours-maxHrs)*this.price.extraHrs)+((this.totalDays-maxDays)*24*this.price.extraHrs),
            fileName: '',                
          })
        }
      
        this.closeDuty.finalPrice=this.price.baseRate
      }
    }
      
  }
  addDriverAllowance(temp:any) {    
    this.days = (moment(this.closeDuty.endDate, "YYYY-MM-DD").diff(moment(this.closeDuty.startDate, "YYYY-MM-DD"), "days"))+1;
    console.log(this.days);
    
    if(temp.dType==="Flat Rate") {
      if(this.driverAllowanceType) {
        this.driverAllowanceType.forEach(element => {
          if(element.allowanceType == 'Over time per hour') {
            let maxHrs:number=temp.maxHrs;
            console.log(this.closeDuty.endTime)
            console.log(this.drivers.workingHoursEnd)            
            if(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours") >= 1) {
              this.driverAllowanceAmount=(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours")*Number(element.amount))
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Early Start Allowance') {
            let earlyStart = this.drivers.workingHoursStart;
            if(this.details.startTime < earlyStart) {
              this.driverAllowanceAmount=element.amount
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }          
        });
      }
    }
    if(temp.dType==="HR-KM(Local)") {
      if(this.driverAllowanceType) {
        this.driverAllowanceType.forEach(element => {
          if(element.allowanceType == 'Over time per hour') {
            let maxHrs:number=temp.maxHrs;
            console.log(this.closeDuty.endTime)
            console.log(this.drivers.workingHoursEnd)            
            if(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours") >= 1) {
              this.driverAllowanceAmount=(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours")*Number(element.amount))
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Early Start Allowance') {
            let earlyStart = this.drivers.workingHoursStart;
            if(this.details.startTime < earlyStart) {
              this.driverAllowanceAmount=element.amount
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Sunday Allowance') {
            if(this.startDate == 1) {
              this.driverAllowanceAmount=element.amount
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})             
              // this.invoiceForms.push(row);
            }
          }
        });
      }
    }
    else if(temp.dType==="Day-KM(Outstation)") {
      if(this.driverAllowanceType) {
        this.driverAllowanceType.forEach(element => {
          if(element.allowanceType == 'Outstation Allowance') {                        
            this.driverAllowanceAmount=element.amount*this.days
            this.allowances.push({
              ownerId: this.user.id,
              dutyId: this.details.id,
              name: 'Driver Allowance',
              charges: this.driverAllowanceAmount,
              fileName: '',                
            })
            // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
            // this.invoiceForms.push(row);
          }
          if(element.allowanceType == 'Over time per hour') {
            let maxHrs:number=temp.maxHrs;
            console.log(this.closeDuty.endTime)
            console.log(this.drivers.workingHoursEnd)            
            if(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours") >= 1) {
              this.driverAllowanceAmount=(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours")*Number(element.amount))
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Outstation Overnight Allowance') {
            let maxDays=temp.maxDays
            if(maxDays > 1) {
              this.driverAllowanceAmount=element.amount*this.days
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }       
          }
        });
      }      
    }
    else if(temp.dType==="Long Duration - Total Km & HR (Monthly Bookings)") {
      if(this.driverAllowanceType) {
        this.driverAllowanceType.forEach(element => {
          if(element.allowanceType == 'Over time per hour') {
            let maxHrs:number=temp.maxHrs;
            console.log(this.closeDuty.endTime)
            console.log(this.drivers.workingHoursEnd)            
            if(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours") >= 1) {
              this.driverAllowanceAmount=(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours")*Number(element.amount))
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Sunday Allowance') {
            if(this.startDate == 1) {
              this.driverAllowanceAmount=element.amount
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Night Allowance') {
            if(this.details.endTime > '20:00') {
              this.driverAllowanceAmount=element.amount
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
        });
      }      
    }
    else if(temp.dType===" Long Duration-Total KM Daily HR(Monthly Bookings) ") {
      if(this.driverAllowanceType) {
        this.driverAllowanceType.forEach(element => {
          if(element.allowanceType == 'Over time per hour') {
            let maxHrs:number=temp.maxHrs;
            console.log(this.closeDuty.endTime)
            console.log(this.drivers.workingHoursEnd)            
            if(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours") >= 1) {
              this.driverAllowanceAmount=(moment(this.closeDuty.endTime, 'HH:mm').diff(moment(this.drivers.workingHoursEnd, 'HH:mm'), "hours")*Number(element.amount))
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Early Start Allowance') {
            let earlyStart = this.drivers.workingHoursStart;
            if(this.details.startTime < earlyStart) {
              this.driverAllowanceAmount=element.amount
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
          if(element.allowanceType == 'Night Allowance') {
            if(this.details.endTime > '20:00') {
              this.driverAllowanceAmount=element.amount
              this.allowances.push({
                ownerId: this.user.id,
                dutyId: this.details.id,
                name: 'Driver Allowance',
                charges: this.driverAllowanceAmount,
                fileName: '',                
              })
              // this.dutiesService.closedutiesExtras(row).subscribe(data=>{})
              // this.invoiceForms.push(row);
            }
          }
        });
      }
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
  var i = 0;
  this.closeDuty.endDate=moment(this.closeDuty.endDate).format("YYYY-MM-DD")
  this.closeDuty.startDate=moment(this.closeDuty.startDate).format("YYYY-MM-DD")
  
  this.details.status="Completed";
  this.details.price=this.closeDuty.finalPrice
  this.dutiesService.updateDutiesClose(this.details);
  this.closeDuty.dutyId=this.details.id;
  this.closeDuty.ownerId = this.user.ownerId;
  this.closeDuty.bookyId=this.details.bid;
  if(this.imgDutySlip != undefined) {
    var type = this.imgDutySlip.type.split("/");
    this.closeDuty.dutySlipFileName = this.details.id+"_dutySlip."+type[1];
    this.uploadDutySlip(this.closeDuty.dutySlipFileName);
  }
  this.dutiesService.closeduties(this.closeDuty).subscribe(data => {
    if(this.imgDutySlipUrl != '') {
      
    }
    if(this.details.ownerDId!=null){
      this.closeDuty.dutyId=this.details.ownerDId;
      this.closeDuty.ownerId=this.user.ownerId;
      this.closeDuty.dutySlipFileName = this.closeDuty.dutySlipFileName.replace(this.details.id, this.details.ownerDId);
      this.dutiesService.closeduties(this.closeDuty).subscribe(data=>{
      })
    }
    this.invoiceForms.value.forEach(element => {
      element.ownerId = this.user.ownerId;
      element.dutyId = this.details.id;
      
      
      var imageName = element.imageName+element.name+".jpg"


      var tempArr = {
        ownerId : this.user.ownerId,
        dutyId : this.details.id,
        name : element.name,
        charges : element.charges,
        fileName : element.imageName+element.name+".jpg"
      }
      this.dutiesService.closedutiesExtras(tempArr).subscribe(data=>{
        element.imageName = element.imageName.replace(this.details.id, this.details.ownerDId);
        var tempArr = {
          ownerId : null,
          dutyId : this.details.ownerDId,
          name : element.name,
          charges : element.charges,
          fileName : element.imageName+element.name+".jpg"
        }
        this.dutiesService.closedutiesExtras(tempArr).subscribe(data=>{});
      })
      if(this.imgUrl[i]!=null)
        this.upload(imageName,this.imgUrl[i])
      i=i+1;
    });
    if(this.allowances.length > 0) {
      this.allowances.forEach(element => {
        this.dutiesService.closedutiesExtras(element).subscribe(data=>{})
      })      
    }    
    this.closeBooking()
  });
this.dialog.close("yes");


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

  editDS() {
    this.dutiesService.updateCloseDutyDetails(this.closeDuty).subscribe(data=>{}, err=>{}, () => {
      this.snackbar.open("Details Updated", "X", {duration: 3000});
      this.dialog.close();
    })
  }

  /////////////////////Extras/////////////////////////////////
  addRow()
  {
 
    const row = this.fb.group({
      name:'',
      charges:0,
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
  supplierImgUrl : any[] =[];
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

  supplierImageSelect(event,row,i) {
    this.selectedFiles = event.target.files;
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.onload=e=>this.supplierImgUrl[i]=reader.result

    row.get('imageName').setValue(this.supplierDetails.id+'_'+i+'_')
    
    reader.readAsDataURL(file);
  }

  upload(filename,imgUrl)
  {
    console.log(this.user.companyName)
    this.uploadService.uploadfile(this.user.companyName,'closeDutyPics/Pictures/'+this.details.id,filename,imgUrl);
    if(this.data.row.ownerDId != null) {
      filename = filename.replace(this.details.id, this.details.ownerDId);
      this.uploadService.uploadfile(this.companyName,'closeDutyPics/Pictures/'+this.details.ownerDId,filename,imgUrl);
    }
  }

  supplierUpload(filename,imgUrl) {
    this.uploadService.uploadfile(this.companyName,'closeDutyPics/Pictures/'+this.supplierDetails.id,filename,imgUrl);
  }
  

  async uploadDutySlip(fileName) {
    if(this.imgDutySlipUrl != '') {
      
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"dutySlip/"+this.details.id+"/"+fileName,this.imgDutySlip,'dutySlipImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success) {
          if(this.data.row.ownerDId != null) {
            fileName = fileName.replace(this.details.id, this.details.ownerDId);
            const uploadData2 = new FormData();
            uploadData2.append(this.companyName+"/"+"dutySlip/"+this.details.ownerDId+"/"+fileName,this.imgDutySlip,'dutySlipImage')
            this.http.post("/files/uploadS3",uploadData2,body).map(res=>res.json()).subscribe(data=>{
              if(data.success) {
                // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
              }
            });
          }
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
    }
  }

  async uploadSupplierDutySlip() {
    if(this.supplierImgDutySlipUrl != '') {
      
      const uploadData= new FormData();
      uploadData.append(this.companyName+"/"+"dutySlip/"+this.supplierDetails.id+"/"+this.supplierCloseDuty.dutySlipFileName,this.supplierImgDutySlip,'dutySlipImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success) {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
    }
  }

  closeDialog()
  {
    this.dialog.close("no");
  }

  selectDutySlipFile(event) {
    this.selectedFiles = event.target.files;
    this.imgDutySlip = <File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgDutySlipUrl=reader.result
    this.imgDutySlipName = this.imgDutySlip.name;
    reader.readAsDataURL(file)
  }

  selectSupplierDutySlipFile(event) {
    this.selectedFiles = event.target.files;
    this.supplierImgDutySlip = <File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.supplierImgDutySlipUrl=reader.result
    this.supplierImgDutySlipName = this.supplierImgDutySlip.name;
    reader.readAsDataURL(file)
  }

  removeDutySlipPhoto()
  {
    this.imgDutySlipUrl='';
    this.previousImgDutySlipUrl='';
    this.closeDuty.licenseFileName='';
    this.imgDutySlipName='';
  }

  removeSupplierDutySlipPhoto() {
    this.supplierImgDutySlipUrl = '';
    this.supplierPreviousImgDutySlipUrl = '';
    this.supplierCloseDuty.licenseFileName = '';
    this.supplierImgDutySlipName = '';
  }

  calculateSupplierPrice() {
    if(this.supplierCloseDuty.endDate == '' || this.supplierCloseDuty.startTime == '' || this.supplierCloseDuty.endTime == '' || this.supplierCloseDuty.startKm == '' || this.supplierCloseDuty.endKm == '') {
      this.snackbar.open("Required fields are empty","",{duration:2000})
    }
    else {
      this.getSupplierDetails()
      var DutyType;
      this.getSupplierDutyType().subscribe(data=>{
        console.log(data)
        DutyType=data;
        this.fillPrices(DutyType[0]);
        this.addDriverAllowance(DutyType[0]);
      })      
      this.addSupplierExtraCharges();
    }    
  }

  supplierTotalDays;
  supplierTotalHours;
  getSupplierDetails() {
    let sDate=this.supplierDetails.startDate;
    let eDate=this.supplierDetails.endDate;
    let stime="T"+this.supplierDetails.startTime+":00Z";
    let etime="T"+this.supplierDetails.endTime+":00Z";
    let startDate=new Date(sDate+stime);
    let endDate=new Date(eDate+etime);
    this.supplierTotalHours=(moment(endDate).diff(startDate,'hours'))
    this.supplierTotalDays=(moment(endDate).diff(startDate,'days'))
  }

  getSupplierDutyType() { 
    const temp = {
      id:this.supplierDetails.dutyTypeId
    }
    return  this.dutiesService.getDutyType(temp);
  }

  fillSupplierPrices(temp:any) {
    var startTime = moment(moment(this.supplierCloseDuty.startDate).format("YYYY-MM-DD")+" "+this.supplierCloseDuty.startTime, "YYYY-MM-DD HH:mm a");
    var endTime = moment(moment(this.supplierCloseDuty.endDate).format("YYYY-MM-DD")+" "+this.supplierCloseDuty.endTime,"YYYY-MM-DD HH:mm a");

    // this.closeDuty.endTime= moment(this.closeDuty.endTime, "HH:mm a");
    // this.closeDuty.startTime=moment(this.closeDuty.startTime, "HH:mm a");

    var totalHrs = endTime.diff(startTime,'hours')
    var totalMins = endTime.diff(startTime,'minutes');

    var clearMins = totalMins % 60;

    this.supplierTotalTime = totalHrs+"hrs "+clearMins+"mins"
    
    this.supplierTotalKM = this.supplierCloseDuty.endKm - this.supplierCloseDuty.startKm;
    if(temp.maxHrs == '' || totalHrs < temp.maxHrs) {
      this.supplierExtraTime = 0;
    }
    else {
      this.supplierExtraTime =(totalHrs-temp.maxHrs)+"hrs "+clearMins+"mins"
    }
    if(temp.maxKms == '') {
      this.supplierExtraKM = 0;
    }
    else if(temp.maxKms < this.totalKM) {
      this.supplierExtraKM = Number(this.supplierTotalKM) - Number(temp.maxKms);
    }

    if(this.supplierCloseDuty.extraKmRate != 0 || this.supplierCloseDuty.extraHrRate != 0) {
      if(temp.dType==="Flat Rate") {
        this.supplierCloseDuty.finalPrice=this.supplierDetails.price
      }
      else if(temp.dType==="HR-KM(Local)") {
        let maxKm:number=temp.maxKms;
        let endKm:number=this.supplierCloseDuty.endKm-this.supplierCloseDuty.startKm;
        let maxHrs:number=temp.maxHrs;
        this.supplierCloseDuty.finalPrice=this.supplierDetails.price;
        if(endKm>maxKm) {
          this.supplierExtraKMCost = ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate);
          this.supplierAllowances.push({
            ownerId: this.supplierDetails.ownerId,
            dutyId: this.supplierDetails.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate),
            fileName: '',                
          })          
        }
        if(this.supplierTotalHours>maxHrs) {
          this.supplierExtraTimeCost = ((this.supplierTotalHours-maxHrs)*this.supplierCloseDuty.extraHrRate);
          this.supplierAllowances.push({
            ownerId: this.supplierDetails.ownerId,
            dutyId: this.supplierDetails.id,
            name: 'Extra Hrs',
            charges: ((this.supplierTotalHours-maxHrs)*this.supplierCloseDuty.extraHrRate),
            fileName: '',                
          })          
        }
      }
      else if(temp.dType==="Day-KM(Outstation)") {
        let maxKm:number=temp.maxKms;
        let endKm:number=this.supplierCloseDuty.endKm-this.supplierCloseDuty.startKm;
        if(endKm>maxKm) {
          this.supplierExtraKMCost = ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate);
          this.supplierAllowances.push({
            ownerId: this.supplierDetails.ownerId,
            dutyId: this.supplierDetails.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate),
            fileName: '',                
          })          
        }
        this.supplierCloseDuty.finalPrice=this.supplierDetails.price
        console.log(this.closeDuty.finalPrice)
      }
      else if(temp.dType==="Long Duration - Total Km & HR (Monthly Bookings)") {
        let maxDays=temp.maxDays
        let maxHrs=temp.maxHrs
        let maxKm=temp.totalKms
        let endKm:number = 0
        let totalTime:number = 0
        this.dutiesService.countIncompleteDuties(this.supplierDetails).subscribe(data => {
          if(data[0].cnt == 1) {
            this.dutiesService.getTotalKms(this.supplierDetails).subscribe(data => {
              endKm = data[0].diff;
            })
            this.dutiesService.getTotalSeconds(this.supplierDetails).subscribe(data => {
              totalTime = (data[0].seconds/3600)
            })
          }
        })
        if(endKm>maxKm) {
          this.supplierExtraKMCost = ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate);
          this.supplierAllowances.push({
            ownerId: this.supplierDetails.ownerId,
            dutyId: this.supplierDetails.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate),
            fileName: '',                
          })            
        }
        if(totalTime>maxHrs) {
          this.supplierExtraTimeCost = ((totalTime-maxHrs)*this.supplierCloseDuty.extraHrRate);
          this.supplierAllowances.push({
            ownerId: this.supplierDetails.ownerId,
            dutyId: this.supplierDetails.id,
            name: 'Extra Hrs',
            charges: ((totalTime-maxHrs)*this.supplierCloseDuty.extraHrRate),
            fileName: '',                
          })
        }
        this.supplierCloseDuty.finalPrice=this.supplierDetails.price
      }
      else if(temp.dType===" Long Duration-Total KM Daily HR(Monthly Bookings) ")
      {
        let maxDays=temp.maxDays
        let maxHrs=temp.maxHrs
        let maxKm=temp.totalKms
        let endKm:number = 0
        this.dutiesService.countIncompleteDuties(this.supplierDetails).subscribe(data => {
          if(data[0].cnt == 1) {
            this.dutiesService.getTotalKms(this.supplierDetails).subscribe(data => {
              endKm = data[0].diff;
            })
          }
        })
        if(endKm>maxKm) {
          this.supplierExtraKMCost = ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate);
          this.supplierAllowances.push({
            ownerId: this.supplierDetails.ownerId,
            dutyId: this.supplierDetails.id,
            name: 'Extra Km',
            charges: ((endKm-maxKm)*this.supplierCloseDuty.extraKmRate),
            fileName: '',                
          })            
        }
        if(this.supplierTotalDays>maxDays || this.supplierTotalHours>maxHrs) {
          this.supplierExtraTimeCost = ((this.supplierTotalHours-maxHrs)*this.supplierCloseDuty.extraHrRate)+((this.supplierTotalDays-maxDays)*24*this.supplierCloseDuty.extraHrRate);
          this.supplierAllowances.push({
            ownerId: this.supplierDetails.ownerId,
            dutyId: this.supplierDetails.id,
            name: 'Extra Hrs',
            charges: ((this.supplierTotalHours-maxHrs)*this.supplierCloseDuty.extraHrRate)+((this.supplierTotalDays-maxDays)*24*this.supplierCloseDuty.extraHrRate),
            fileName: '',                
          })
        }
        this.supplierCloseDuty.finalPrice=this.supplierDetails.price
      }
    }
    // else {
    //   if(temp.dType==="Flat Rate") {
    //     this.supplierCloseDuty.finalPrice=this.price.baseRate
    //   }
    //   else if(temp.dType==="HR-KM(Local)") {
    //     let maxKm:number=temp.maxKms;
    //     let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
    //     let maxHrs:number=temp.maxHrs;
    //     this.closeDuty.finalPrice=this.price.baseRate;
    //     if(endKm>maxKm)
    //     {
    //       this.extraKMCost = ((endKm-maxKm)*this.price.extraKm);
    //       this.allowances.push({
    //         ownerId: this.user.id,
    //         dutyId: this.details.id,
    //         name: 'Extra Km',
    //         charges: ((endKm-maxKm)*this.price.extraKm),
    //         fileName: '',                
    //       })          
    //     }
    //     if(this.totalHours>maxHrs)
    //     {
    //       this.extraTimeCost = ((this.totalHours-maxHrs)*this.price.extraHrs);
    //       this.allowances.push({
    //         ownerId: this.user.id,
    //         dutyId: this.details.id,
    //         name: 'Extra Hrs',
    //         charges: ((this.totalHours-maxHrs)*this.price.extraHrs),
    //         fileName: '',
    //       })          
    //     }
    //   }
    //   else if(temp.dType==="Day-KM(Outstation)")
    //   {
    //     let maxKm:number=temp.maxKms;
    //     let endKm:number=this.closeDuty.endKm-this.closeDuty.startKm;
    //     if(endKm>maxKm)
    //     {
    //       this.extraKMCost = ((endKm-maxKm)*this.price.extraKm);
    //       this.allowances.push({
    //         ownerId: this.user.id,
    //         dutyId: this.details.id,
    //         name: 'Extra Km',
    //         charges: ((endKm-maxKm)*this.price.extraKm),
    //         fileName: '',
    //       })          
    //     }
        
    //       this.closeDuty.finalPrice=this.price.baseRate
        
    //     console.log(this.closeDuty.finalPrice)
    //   }
    //   else if(temp.dType==="Long Duration - Total Km and HR (Monthly Bookings)")
    //   {
    //       let maxDays=temp.maxDays
    //       let maxHrs=temp.maxHrs
    //       let maxKm=temp.totalKms
    //       let endKm:number = 0
    //       let totalTime:number = 0
    //       this.dutiesService.countIncompleteDuties(this.details).subscribe(data => {
    //         if(data[0].cnt == 1) {
    //           this.dutiesService.getTotalKms(this.details).subscribe(data => {
    //             endKm = data[0].diff;
    //           })
    //           this.dutiesService.getTotalSeconds(this.details).subscribe(data => {
    //             totalTime = (data[0].seconds/3600)
    //           })
    //         }
    //       })
          
    //       if(endKm>maxKm)
    //       {
    //         this.extraKMCost = ((endKm-maxKm)*this.price.extraKm);
    //         this.allowances.push({
    //           ownerId: this.user.id,
    //           dutyId: this.details.id,
    //           name: 'Extra Km',
    //           charges: ((endKm-maxKm)*this.price.extraKm),
    //           fileName: '',                
    //         })            
    //       }
    //       // if(this.totalDays>maxDays || this.totalHours>maxHrs)
    //       if(totalTime>maxHrs)
    //       {
    //         this.extraTimeCost = ((totalTime-maxHrs)*this.price.extraHrs);
    //         this.allowances.push({
    //           ownerId: this.user.id,
    //           dutyId: this.details.id,
    //           name: 'Extra Hrs',
    //           charges: ((totalTime-maxHrs)*this.price.extraHrs),
    //           fileName: '',                
    //         })
    //       }
        
        
    //          this.closeDuty.finalPrice=this.price.baseRate
        
    //   }
    //   else if(temp.dType===" Long Duration-Total KM Daily HR(Monthly Bookings) ")
    //   {
    //     let maxDays=temp.maxDays
    //     let maxHrs=temp.maxHrs
    //     let maxKm=temp.totalKms
    //     let endKm:number = 0
    //     this.dutiesService.countIncompleteDuties(this.details).subscribe(data => {
    //       if(data[0].cnt == 1) {
    //         this.dutiesService.getTotalKms(this.details).subscribe(data => {
    //           endKm = data[0].diff;
    //         })
    //       }
    //     })
          
    //     if(endKm>maxKm)
    //     {
    //       this.extraKMCost = ((endKm-maxKm)*this.closeDuty.extraKmRate);
    //       this.allowances.push({
    //         ownerId: this.user.id,
    //         dutyId: this.details.id,
    //         name: 'Extra Km',
    //         charges: ((endKm-maxKm)*this.price.extraKm),
    //         fileName: '',                
    //       })            
    //     }
    //     if(this.totalDays>maxDays || this.totalHours>maxHrs)
    //     // if(totalTime>maxHrs)
    //     {
    //       this.extraTimeCost = ((this.totalHours-maxHrs)*this.closeDuty.extraHrRate);
    //       this.allowances.push({
    //         ownerId: this.user.id,
    //         dutyId: this.details.id,
    //         name: 'Extra Hrs',
    //         charges: ((this.totalHours-maxHrs)*this.price.extraHrs)+((this.totalDays-maxDays)*24*this.price.extraHrs),
    //         fileName: '',                
    //       })
    //     }
      
    //     this.closeDuty.finalPrice=this.price.baseRate
    //   }
    // }
      
  }

  addSupplierExtraCharges() {
    this.supplierForm.value.forEach(element => {
     console.log(element);
   });
  }

  closeSupplier() {
    var i = 0;
    this.supplierCloseDuty.endDate=moment(this.supplierCloseDuty.endDate).format("YYYY-MM-DD")
    this.supplierCloseDuty.startDate=moment(this.supplierCloseDuty.startDate).format("YYYY-MM-DD")
    
    this.supplierDetails.status="Completed";
    this.supplierDetails.price=this.supplierCloseDuty.finalPrice
    this.dutiesService.updateDutiesClose(this.supplierDetails);
    this.supplierDetails.dutyId=this.supplierDetails.id;
    this.supplierCloseDuty.bookyId=this.supplierDetails.bid;
    if(this.supplierImgDutySlip != undefined) {
      var type = this.supplierImgDutySlip.type.split("/");
      this.supplierCloseDuty.dutySlipFileName = this.supplierDetails.id+"_dutySlip."+type[1];
    }
    this.dutiesService.closeduties(this.supplierCloseDuty).subscribe(data => {
      if(this.supplierImgDutySlipUrl != '') {
        this.uploadSupplierDutySlip();
      }
      if(this.supplierDetails.ownerDId!=null){
        this.supplierCloseDuty.dutyId=this.supplierDetails.ownerDId;
        this.dutiesService.closeduties(this.supplierCloseDuty).subscribe(()=>{
        })
      }
      this.supplierInvoiceForms.value.forEach(element => {
        element.ownerId = this.user.ownerId;
        element.dutyId = this.details.id;
        var imageName = element.imageName+element.name+".jpg"
        var tempArr = {
          ownerId : this.supplierDetails.ownerId,
          dutyId : this.supplierDetails.id,
          name : element.name,
          charges : element.charges,
          fileName : element.imageName+element.name+".jpg"
        }
        this.dutiesService.closedutiesExtras(tempArr).subscribe(data=>{})
        if(this.supplierImgUrl[i]!=null)
          this.upload(imageName,this.supplierImgUrl[i])
        i=i+1;
      });
      if(this.supplierAllowances.length > 0) {
        this.supplierAllowances.forEach(element => {
          this.dutiesService.closedutiesExtras(element).subscribe(data=>{})
        })      
      }    
      this.closeSupplierBooking()
    });
    this.dialog.close("yes");
  }

  closeSupplierBooking() {
    this.dutiesService.checkIfBookingComplete('bid',this.supplierDetails.bid).subscribe(data => {
      var temp=true;
      data.forEach(element => {
        if(element.cnt > 0) {
          console.log("inside")
          temp=false;
        }    
      });

      if(temp==true) {
        console.log("outside")
        this.dutiesService.completeBooking(this.supplierDetails.bid).subscribe(() => {
          this.dutiesService.updateTotalPrice(this.supplierDetails.bid)
        });;
      }
    });
    if(this.supplierDetails.supplierBId!=null) {
      this.dutiesService.completeBooking(this.supplierDetails.supplierBId).subscribe(()=>{})
    }
  }

  addSupplierRow() {
    const row = this.fb.group({
      name:'',
      charges:0,
      fileName: '',
      imageName: ''      
    })
    this.supplierInvoiceForms.push(row);
    this.supplierInvoiceForms.controls.forEach(element=>{
      console.log(element)
    })
  }

  deleteSupplierRow(i) {
    this.supplierInvoiceForms.removeAt(i);
    this.supplierImgUrl.splice(i,1);
  }

  get supplierInvoiceForms() {
    return this.supplierForm.get('rows') as FormArray
  }

  editSupplierDS() {
    this.dutiesService.updateCloseDutyDetails(this.supplierCloseDuty).subscribe(data=>{}, err=>{}, () => {
      this.snackbar.open("Details Updated", "X", {duration: 3000});
      this.dialog.close();
    })
  }
}
