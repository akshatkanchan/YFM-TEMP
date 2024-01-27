import { Component, OnInit, Inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Duty } from '../duty';
import { Http,Headers } from '@angular/http';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { DriverService } from '../../masters/new-driver/driver.service';
import { VehicleService } from '../../masters/new-vehicles/vehicle.service';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Vehicle } from '../../masters/new-vehicles/vehicle';
import { Driver } from '../../masters/new-driver/driver';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { DutiesService } from '../duties.service';
import { CallService } from './call.service';
import * as moment from 'moment';
import { MessagingService } from '../../../messaging.service';
import { Customer } from '../../masters/customer';
import { CustomerService } from '../../masters/customer/customer.service';
import { SubUser } from '../../masters/sub-users/sub-user';

declare var Twilio: any;
 
@Component({
  selector: 'call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})

export class CallComponent implements OnInit, AfterViewInit{
  
  callStatus;
  callNumber:number=0;
  deviceStatus = 'Offline'

  ngAfterViewInit(): void {

    this.msgService.receiveMessage()
    this.callStatus = this.msgService.currentMessage
    this.callStatus.subscribe(payload=>{
      

      if(payload)
      {
        
        this.callNumber = this.checkNumber(payload)

        if(this.callNumber != 0)
        {
          this.deviceStatus = 'Online'
        }
        
      }
      
      
    })

  }

  @ViewChild('dutyPassengerTemplate') dutyPassengerTemplate: ElementRef;
  @ViewChild('dutySupplierTemplate') dutySupplieremplate: ElementRef;

  addTrackingCustomer = false;
  addTrackingPassenger = false;
  addTracking = false;
  trackingInfo = '';

  duty:Duty={};
  isDriver=false;
  
  mailSubject;
  mailPassenger:boolean=false;
  mailSupplier:boolean=false;
  user:User={};
  businessSettings: BusinessSettings;

  vehicleNumber: string;
  driverImg:any;
  vehicleImg:any;
  vehicle: Vehicle={}
  driver: Driver={}
  vehicleName :string ='';
  companyProfile: CompanyProfile={};

  allPassengers:any[]=[];
  allBookedBy:any[]=[];

  smsArray:any[]=[];
  whatsAppArray:any[]=[];
  bookedByArray:any[]=[];
  passengerArray:any[]=[];
  customerArray:any[]=[];

  logDisplay:any[]=[];
  logs:any[]=[];
  driverLogs:any[]=[];
  driverLogsDisplay:any[]=[]

  bookByLogCount=0;
  passengerLogCount=0;
  driverLogCount=0;
  customerLogCount=0;
  customLogCount=0;

  message:string='';
  messageLength: number;
  whatsappMessage:string='';
  whatsappMessageLength: number;

  driverMessage:string='';
  driverMessageTemplate:string='';
  driverMessageLength:number;
  driverSMSArray=[];
  driverWhatsAppArray=[];

  customer:Customer={}

  customNumber: any = '';
  customEmail: any = '';
  companyLogo:any='';

  permission:SubUser={};

  constructor(
    @Inject (MAT_DIALOG_DATA) public data, 
    private http:Http, 
    private auth:AuthService, 
    private driverService: DriverService, 
    private dialog:MatDialog,
    private snackBar: MatSnackBar,
    private vehicleService: VehicleService,
    private uploadService : FileuploadService,
    private _sanitizer:DomSanitizer,
    private companyProfileService: CompanyprofileService,
    private dutyService:DutiesService,
    private callService:CallService,
    private msgService:MessagingService,
    private customerService:CustomerService,    
  ) {
    
  }

  screenWidth : number;

  ngOnInit() {

    this.screenWidth = window.innerWidth;
    
    this.auth.user.subscribe(data=>{
      this.user=data[0];

      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
      }) 
    if(data)
    {

      this.callService.checkDevice(this.user).subscribe()

      this.driverMessage = this.duty.cname+". For: "+this.duty.passenger+" ("+this.duty.passengerNo+"). Type: "+this.duty.dutyType+". Vehicle: "+this.duty.vehicle+". Vehicle Group: "+this.duty.vehicleGroup+". Reporting: "+this.duty.reportingAddress;

      this.duty=this.data;

      this.customerService.getSingleCustomer({customerId:this.duty.customerId}).subscribe(data=>{
        this.customer=data[0]
      })

      this.callService.getAllPassengers({bookingId:this.data.bid}).subscribe(data=>{
        this.allPassengers=data
      })

      this.callService.getAllBookedBy({bookingId:this.data.bid}).subscribe(data=>{
        this.allBookedBy=data;
      })

      this.callService.getLogs({dutyId:this.duty.id,type:'passenger',ownerId:this.user.ownerId}).subscribe(data=>{
        this.logDisplay=data
      })

      this.callService.getLogs({dutyId:this.duty.id,type:'driver'}).subscribe(data=>{
        this.driverLogsDisplay=data
      })

      if(this.duty) {
        var temp = {
          ownerId: this.duty.ownerId,
          driverId: this.duty.driverId
        }

        if(this.duty.status=='Dispatched')
        {
          var trackTemp =
          {
            dutyId:this.duty.id,
            vehicleId:this.duty.vehicleId,
            driverId:this.duty.driverId
          }

          this.dutyService.addTracking(trackTemp).subscribe(data=>{
            this.trackingInfo='http://www.yourfleetman.com/#/TrackYourVehicle?vtc='+data;
          })
        }
        
        this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
          this.companyProfile = data[0];
          console.log(this.companyProfile.phone);
          
          this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
            this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
          })

          var str = "--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;          
          if(this.businessSettings.UseBookingsIDInSMS == true) {
            this.message ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aDriver: "+this.duty.driver+" ("+this.driver.mobileNumber+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle: "+this.duty.vehicle+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress+".%0aYour Booking ID is "+this.duty.bid;
            this.message = this.message.trim();
            this.whatsappMessage ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aDriver: "+this.duty.driver+" ("+this.driver.mobileNumber+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle: "+this.duty.vehicle+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress+".%0aYour Booking ID is "+this.duty.bid+".%0a%0a"+str;
            this.whatsappMessage = this.whatsappMessage.trim();
          }
          else {
            this.message ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aDriver: "+this.duty.driver+" ("+this.driver.mobileNumber+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle: "+this.duty.vehicle+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress;
            this.message = this.message.trim();
            this.whatsappMessage ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aDriver: "+this.duty.driver+" ("+this.driver.mobileNumber+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle: "+this.duty.vehicle+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress+".%0a%0a"+str;
            this.whatsappMessage = this.whatsappMessage.trim();
          }
        })

        this.vehicleService.getVehicleNumber(this.user.ownerId, this.duty.vehicleId).subscribe(data => {
          console.log(data)
          if(data.length>0)
          {
            this.vehicle=data[0]
            this.vehicleNumber = data[0].number;
            this.uploadService.getFile(this.user.companyName,'vehicleList',this.vehicle.fileName).subscribe(data=>{
              if(data)
              this.vehicleImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
              + data.text());     
            })
          }
          
        })
        this.driverService.findDriver(temp).subscribe(data => {
          if(data.length>0)
          {
            this.driver = data[0];

            

            this.isDriver=true;
            this.uploadService.getFile(this.user.companyName,'driverList',this.driver.fileName).subscribe(data=>{
              if(data)
              this.driverImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
              + data.text());    
            })
          }
        })
        
      }
    }

    })

    this.auth.businessSettings.subscribe(data => {
      this.businessSettings = data;
    })
  }

  makeAppCall(number,type,name) {
    var temp = {
      userId: this.user.id,
      number:number,
      ownerId:this.user.ownerId,
      date:moment().format("YYYY-MM-DD")
    }
    this.callService.makeCall(temp).subscribe(data=>{
      console.log(data)
      this.snackBar.open("Calling "+number+". Check device","X",{duration:5000})
    });

    this.logs.push({dutyId:this.duty.id,log:"Call was made to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
  }

  messageSize() {
    this.messageLength = Math.ceil(this.message.length/160);
    return this.messageLength;
  }

  drimessageSize() {
    this.driverMessageLength = Math.ceil(this.message.length/160);
    return this.driverMessageLength;
  }

  closeDialog()
  {
    this.callService.unsubscribe(this.user).subscribe();
    this.dialog.closeAll();
  }

  sendSMS(event,number,type,name?)
  {
    if(event.checked)
    {
      if(type=='Booked By')
      {
        this.logs.push({dutyId:this.duty.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='Passenger')
      {
        this.logs.push({dutyId:this.duty.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='Customer')
      {
        this.logs.push({dutyId:this.duty.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({dutyId:this.duty.id,log:"SMS was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.customLogCount=this.customLogCount+1;
      }
      this.smsArray.push(number)
      console.log(this.smsArray);

      console.log(this.logs);
      
      
    }
    else
    {
      if(type!='custom')
      {
        for(var i=0; i<this.logs.length; i++) {
          
            if(this.logs[i].log.indexOf("SMS was sent to "+name+" ("+type+")")!=-1) {
              this.logs.splice(i,1)
            }
        }
        this.bookByLogCount=this.bookByLogCount-1;
      }
      
      else if(type=='custom')
      {
        for(var i=0; i<this.logs.length; i++) {
          
            if(this.logs[i].log.indexOf("SMS was sent to "+number)!=-1) {
              this.logs.splice(i,1)
            }
        }
        this.customLogCount=this.customLogCount-1;
      }

      var i = this.smsArray.findIndex(x=>x===number);
      this.smsArray.splice(i,1);
      
      console.log(this.logs);
      
    }
  }

  sendWhatsApp(event,number,type,name?)
  {
    if(event.checked)
    {
      if(type=='Booked By')
      {
        this.logs.push({dutyId:this.duty.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='Passenger')
      {
        this.logs.push({dutyId:this.duty.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='Customer')
      {
        this.logs.push({dutyId:this.duty.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({dutyId:this.duty.id,log:"WhatsApp was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.customLogCount=this.customLogCount+1;
      }
      this.whatsAppArray.push(number)
      console.log(this.whatsAppArray);
      
    }
    else
    {
      if(type!='custom')
      {
        for(var i=0; i<this.logs.length; i++) {
          
            if(this.logs[i].log.indexOf("WhatsApp was sent to "+name+" ("+type+")")!=-1) {
              this.logs.splice(i,1)
            }
        }
        this.bookByLogCount=this.bookByLogCount-1;
      }
      
      else if(type=='custom')
      {
        for(var i=0; i<this.logs.length; i++) {
          
            if(this.logs[i].log.indexOf("WhatsApp was sent to "+number)!=-1) {
              this.logs.splice(i,1)
            }
        }
        this.customLogCount=this.customLogCount-1;
      }
      var i = this.whatsAppArray.findIndex(x=>x===number);
      this.whatsAppArray.splice(i,1);
    }
  }

  sendEmail(event,email,type,name?)
  {
    if(event.checked)
    {
      if(type=='Booked By')
      {
        this.logs.push({dutyId:this.duty.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.bookedByArray.push(email)
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='Passenger')
      {
        this.logs.push({dutyId:this.duty.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.passengerArray.push(email)
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='Customer')
      {
        this.logs.push({dutyId:this.duty.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
        this.customerArray.push(email)
        this.customerLogCount=this.customerLogCount+1;
      }
    }
    else
    {
      if(type=='Booked By')
      {
        var i = this.bookedByArray.findIndex(x=>x===email);
        this.bookedByArray.splice(i,1);
        this.bookByLogCount=this.bookByLogCount-1;
      }
      if(type=='Passenger')
      {
        var i = this.passengerArray.findIndex(x=>x===email);
        this.passengerArray.splice(i,1);
        this.passengerLogCount=this.passengerLogCount-1
      }
      if(type=='Customer')
      {
        this.customerArray.pop();
        this.customerLogCount=this.customerLogCount+1;
      }

      for(var i=0; i<this.logs.length; i++) {
          
        if(this.logs[i].log.indexOf("Email was sent to "+name+" ("+type+")")!=-1) {
          this.logs.splice(i,1)
        }
      } 
    }
    
  }

  send()
  {
    if(this.customEmail != '') {
      if(this.customEmail.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
        var i = this.passengerArray.findIndex(x=>x===this.customEmail);
        this.passengerArray.push(this.customEmail)
        this.logs.push({dutyId:this.duty.id,log:"Email was sent to "+this.customEmail+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
      }
      else {
        this.snackBar.open("Please Enter a valid email address", "X", {duration: 3000});
      }
    }
    if(this.customNumber != '') {
      if(this.customNumber.match(/\b([789]\d{9}$)\b/)) {
        
        var j = this.whatsAppArray.findIndex(x=>x===this.customNumber);
        // this.smsArray.splice(i,1);
        // this.whatsAppArray.splice(j,1);
      }        
      else {
        this.snackBar.open("Please Enter a valid phone number", "X", {duration: 3000});
      }
    }
    if(this.smsArray.length>0)
    {                  
      console.log(this.smsArray);
      
      this.callService.sendSMS({number:this.smsArray,message:this.message}).subscribe(data=>{
        console.log(data);
      },err=>{},()=>{
        var i = this.smsArray.findIndex(x=>x===this.customNumber);
        this.smsArray.splice(i,1);
        this.customNumber = '';
        this.snackBar.open("SMS Sent", "X", {duration: 3000})
      })      
    }
    if(this.whatsAppArray.length>0)
    {
      this.callService.sendWhatsApp({number:this.whatsAppArray,message:this.whatsappMessage}).subscribe(data=>{},err=>{},()=>{
        var i = this.whatsAppArray.findIndex(x=>x===this.customNumber);
        this.whatsAppArray.splice(i,1);
        this.customNumber = '';
        this.snackBar.open("Whatsapp Sent", "X", {duration: 3000})
      })
    }
    if(this.bookedByArray.length>0)
    {      
      if(this.businessSettings.CCAllAllotmentEmails) {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.bookedByArray,
          cc: this.businessSettings.AutoCCEmail,
          date:this.duty.startDate,
          subject: 'Duty details for '+this.allPassengers[0].passenger+' on '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutySupplieremplate.nativeElement.innerHTML,
          vehicle:this.duty.vehicle,
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.bookedByArray,
          cc: '',
          date:this.duty.startDate,
          subject: 'Duty details for '+this.allPassengers[0].passenger+' on '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutySupplieremplate.nativeElement.innerHTML,
          vehicle:this.duty.vehicle,
        }
      }
      this.http.post('/Voip/sendMail',temp).map(res=>res.json()).subscribe(data=>{
        console.log(data)
      },err=>{},()=>{
        this.snackBar.open("Email Sent", "X", {duration: 3000});
      });
    }
    if(this.passengerArray.length>0)
    {
      if(this.businessSettings.CCAllAllotmentEmails) {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.passengerArray,
          cc: this.businessSettings.AutoCCEmail,
          date:this.duty.startDate,
          subject: 'Duty details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,
          vehicle:this.duty.vehicle,
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.passengerArray,
          cc: '',
          date:this.duty.startDate,
          subject: 'Duty details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,
          vehicle:this.duty.vehicle,
        }
      }
      this.http.post('/Voip/sendMail',temp).map(res=>res.json()).subscribe(data=>{
        console.log(data)
      },err=>{},()=>{
        this.snackBar.open("Email Sent", "X", {duration: 3000});
      });
    }
    if(this.customerArray.length>0)
    {
      if(this.businessSettings.CCAllAllotmentEmails) {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.customerArray,
          cc: this.businessSettings.AutoCCEmail,
          date:this.duty.startDate,
          subject: 'Duty details for '+this.allPassengers[0].passenger+' on '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutySupplieremplate.nativeElement.innerHTML,
          vehicle:this.duty.vehicle,
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.customerArray,
          cc: '',
          date:this.duty.startDate,
          subject: 'Duty details for '+this.allPassengers[0].passenger+' on '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutySupplieremplate.nativeElement.innerHTML,
          vehicle:this.duty.vehicle,
        }
      }
      this.http.post('/Voip/sendMail',temp).map(res=>res.json()).subscribe(data=>{
        console.log(data)
      },err=>{},()=>{
        this.snackBar.open("Email Sent", "X", {duration: 3000});
      });
    }

    var count=
    {
      sms:this.smsArray.length,
      whatsApp:this.whatsAppArray.length,
      email:this.bookedByArray.length+this.passengerArray.length+this.customerArray.length,
      date:moment().format("YYYY-MM-DD"),
      ownerId:this.user.ownerId
    }

    this.callService.insertCount(count).subscribe(data=>{
      console.log(data)
    })

    this.insertLog();

  }
  
  sendDriverSMS(event,number,name)
  {
    if(event.checked)
    {
      this.logs.push({dutyId:this.duty.id,log:"SMS was sent to "+name+" (Driver) on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
      this.driverSMSArray.push(number)
      this.driverLogCount=this.driverLogCount+1
    }
    else
    {
      for(var i=0; i<this.logs.length; i++) {
          
        if(this.logs[i].log.indexOf("SMS was sent to "+name+" (Driver)")!=-1) {
          this.logs.splice(i,1)
        }
      }
      this.driverSMSArray.pop()
      this.driverLogCount=this.driverLogCount-1
    }
  }

  sendDriverWhatsApp(event,number,name)
  {
    if(event.checked)
    {
      this.logs.push({dutyId:this.duty.id,log:"WhatsApp was sent to "+name+" (Driver) on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type:'passenger',ownerId:this.user.ownerId});
      this.driverWhatsAppArray.push(number)
      this.driverLogCount=this.driverLogCount+1
    }
    else
    {
      for(var i=0; i<this.logs.length; i++) {
          
        if(this.logs[i].log.indexOf("WhatsApp was sent to "+name+" (Driver)")!=-1) {
          this.logs.splice(i,1)
        }
      }
      this.driverWhatsAppArray.pop()
      this.driverLogCount=this.driverLogCount-1
    }
  }

  sendDriver()
  {
    if(this.driverSMSArray.length>0)
    {
      this.callService.sendSMS({number:this.driverSMSArray,message:this.message}).subscribe()      
    }
    if(this.driverWhatsAppArray.length>0)
    {
      this.callService.sendWhatsApp({number:this.driverWhatsAppArray,message:this.whatsappMessage}).subscribe()
    }

    var count=
    {
      sms:this.driverSMSArray.length,
      whatsApp:this.driverWhatsAppArray.length,
      email:0,
      date:moment().format("YYYY-MM-DD"),
      ownerId:this.user.ownerId
    }

    this.callService.insertCount(count).subscribe(data=>{
      console.log(data)
    })

    this.insertLog();

  }

  insertLog()
  {
    this.logs.forEach(element=>{
      this.callService.insertLogs(element).subscribe(data=>{
        console.log(data)
      })
    })
  }

  checkNumber(data)
  {
    try{
      var notify = JSON.parse(data.notification.body)

      return notify.number
    }
    catch (e)
    {
      return 0;
    }
    
  }


}


/* Booking SMS

  Booking confirmation for {{booking.passenger}} ({{booking.passengerNo}})
  Type: {{booking.dutyType}}
  Vehicle Group: {{booking.vehicleGroup}}
  From: {{booking.startDate}} To: {{booking.endDate}}
  Time: {{duty.reportingTime}}
  Reporting Address: {{duty.reportingAddress}}

*/

/* Driver SMS

  {{duty.cname}}
  For: {{duty.passenger}} ({{duty.passengerNo}})
  Type: {{duty.dutyType}}
  Vehicle: {{duty.vehicle}}
  Vehicle Group: {{duty.vehicleGroup}}
  Reporting: {{duty.reportingAddress}}

*/

/* Others SMS

  For: {{duty.passenger}} ({{duty.passengerNo}})
  Driver: {{duty.driver}} ({{driver.mobileNumber}})
  Type: {{duty.dutyType}}
  Vehicle: {{duty.vehicle}}
  Vehicle Group: {{duty.vehicleGroup}}
  Reporting: {{duty.reportingAddress}}

*/