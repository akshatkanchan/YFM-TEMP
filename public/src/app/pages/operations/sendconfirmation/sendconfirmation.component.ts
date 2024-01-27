import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Http, Headers } from '@angular/http';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { Booking } from '../booking';
import { CallService } from '../../duties/call/call.service';
import { MessagingService } from '../../../messaging.service';
import * as moment from 'moment';
import { Customer } from '../../masters/customer';
import { CustomerService } from '../../masters/customer/customer.service';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-sendconfirmation',
  templateUrl: './sendconfirmation.component.html',
  styleUrls: ['./sendconfirmation.component.scss']
})
export class SendconfirmationComponent implements OnInit, AfterViewInit{
  
  callStatus;
  callNumber:number=0;
  deviceStatus = 'Offline';
  customNumber: any = '';
  customEmail: any = '';
  emailAttachments = false;

  attachments:any[]=[];
  addedAttachments:any[]=[];
  attachmentNames:any[]=[];

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


  mailBody: any;
  mailSubject: any = "Your booking has been confirmed";
  bookingDate = new Date().toISOString().split('T')[0];
  businessSettings: BusinessSettings = {};
  user: User = {};
  companyProfile: CompanyProfile = {};

  screenWidth : number;
  allPassengers:any[]=[];
  allBookedBy:any=[];
  duty: Booking={};
  message:string='';
  messageLength: number;
  whatsappMessage:string='';
  whatsappMessageLength: number;
  smsArray:any[]=[];
  whatsAppArray:any[]=[];
  bookedByArray:any[]=[];
  passengerArray:any[]=[];
  customerArray:any[]=[];
  bookByLogCount=0;
  passengerLogCount=0;
  customerLogCount=0;
  driverLogCount=0;
  customLogCount=0;
  logDisplay:any[]=[];
  logs:any[]=[];
  mailPassenger:boolean=false;
  customer:Customer={};
  companyLogo:any='';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private http:Http, 
    private dialog:MatDialog, 
    private auth: AuthService,
    private companyProfileService: CompanyprofileService,
    private callService:CallService,
    private snackBar: MatSnackBar,
    private msgService:MessagingService,
    private customerService:CustomerService,
    private uploadService : FileuploadService,
    private _sanitizer:DomSanitizer,
    private bookingService: BookingsService
  ) {
          
    
   }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.auth.businessSettings.subscribe(data => {
      this.businessSettings=data;
    })
    this.auth.user.subscribe(data => {
      this.user = data[0]

      this.duty=this.data.row;
      if(data) {            
        
        this.customerService.getSingleCustomer({customerId:this.duty.customerId}).subscribe(data=>{
          this.customer=data[0]
        })

        console.log(this.data)
        this.callService.getAllPassengers({bookingId:this.duty.id}).subscribe(data=>{
          this.allPassengers=data
        })
  
        this.callService.getAllBookedBy({bookingId:this.duty.id}).subscribe(data=>{
          this.allBookedBy=data;
        })        

        this.callService.getBookingLogs({bookingId:this.duty.id}).subscribe(data=>{
          this.logDisplay=data
        })
          
        
        this.callService.checkDevice(this.user).subscribe();    
        
        this.bookingService.getBookingFiles({id:this.duty.id}).subscribe(data=>{
          this.emailAttachments=true
          this.attachments = data
        })
                 
        }  

      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0];

        this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
          this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
        })

        if(this.businessSettings.UseBookingsIDInSMS == true) {
          this.message ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress+".%0aYour Booking ID is "+this.duty.id;
          this.whatsappMessage ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress+".%0aYour Booking ID is "+this.duty.id+".%0a%0a--%0aFrom: "+this.user.companyName+".%0a This is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
        }
        else {
          this.message ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress;
          this.whatsappMessage ="For: "+this.duty.passenger.replace('+','%2B')+" ("+this.duty.passengerNo+").%0aType: "+this.duty.dutyType.replace('&', 'and')+".%0aVehicle Group: "+this.duty.vehicleGroup+".%0aReporting: "+this.duty.reportingAddress+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
        }
      })
    })
  }

  makeAppCall(number) {
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
  }

  sendMail(div1: HTMLDivElement) {
    this.mailBody = div1;
    if(this.businessSettings.CCAllConfirmationAndCancellationEmails) {
      var temp = {
        companyEmail: this.companyProfile.email,
        name: this.companyProfile.name,
        email: this.data.row.bookByEmail,
        cc: this.businessSettings.AutoCCEmail,
        subject: this.mailSubject,
        mailBody:this.mailBody.innerHTML,
      }
    }
    else {
      var temp = {
        companyEmail: this.companyProfile.email,
        name: this.companyProfile.name,
        email: this.data.row.bookByEmail,
        cc: '',
        subject: this.mailSubject,
        mailBody:this.mailBody.innerHTML,
      }
    }
    
    console.log(temp)
    this.http.post('/Voip/sendMail',temp).subscribe(data=>{
    console.log(data)      
    })
  console.log(this.mailSubject)
  console.log(this.mailBody.innerHTML)
  }  

  messageSize() {
    this.messageLength = Math.ceil(this.message.length/160);
    return this.messageLength;
  }

  closeDialog() {
    this.callService.unsubscribe(this.user).subscribe();
    this.dialog.closeAll();
  }

  sendSMS(event,number,type,name?)
  {
    if(event.checked)
    {
      if(type=='bookedBy')
      {
        this.logs.push({bookingId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='passenger')
      {
        this.logs.push({bookingId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='customer')
      {
        this.logs.push({bookingId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({bookingId:this.data.row.id,log:"SMS was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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
      if(type=='bookedBy')
      {
        this.logs.push({bookingId:this.data.row.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='passenger')
      {
        this.logs.push({bookingId:this.data.row.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='customer')
      {
        this.logs.push({bookingId:this.data.row.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({bookingId:this.data.row.id,log:"WhatsApp was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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
      if(type=='bookedBy')
      {
        this.logs.push({bookingId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookedByArray.push(email)
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='passenger')
      {
        this.logs.push({bookingId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerArray.push(email)
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='customer')
      {
        this.logs.push({bookingId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.customerArray.push(email)
        this.customerLogCount=this.customerLogCount+1;
      }
    }
    else
    {
      if(type=='bookedBy')
      {
        var i = this.bookedByArray.findIndex(x=>x===email);
        this.bookedByArray.splice(i,1);
        this.bookByLogCount=this.bookByLogCount-1;
      }
      if(type=='passenger')
      {
        var i = this.passengerArray.findIndex(x=>x===email);
        this.passengerArray.splice(i,1);
        this.passengerLogCount=this.passengerLogCount-1
      }
      if(type=='customer')
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
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    if(this.customEmail != '') {
      if(this.customEmail.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
        var i = this.passengerArray.findIndex(x=>x===this.customEmail);
        this.passengerArray.push(this.customEmail)
      }
      else {
        this.snackBar.open("Please Enter a valid email address", "X", {duration: 3000});
      }
    }
    if(this.customNumber != '') {
      if(this.customNumber.match(/\b([789]\d{9}$)\b/)) {
        var i = this.smsArray.findIndex(x=>x===this.customNumber);
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
      this.callService.sendSMS({number:this.smsArray,message:this.message}).subscribe()      
    }
    if(this.whatsAppArray.length>0)
    {
      this.callService.sendWhatsApp({number:this.whatsAppArray,message:this.whatsappMessage}).subscribe()      
    }    
    if(this.bookedByArray.length>0)
    {
      if(this.businessSettings.CCAllAllotmentEmails) {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.bookedByArray,
          cc: this.businessSettings.AutoCCEmail,
          subject: 'Booking details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,
          key:this.addedAttachments,
          bookingId:this.duty.id        
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.bookedByArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,   
          key:this.addedAttachments,
          bookingId:this.duty.id      
        }
      }
      this.http.post('/Voip/sendMailBookingConfirm',temp,{headers:headers}).map(res=>res.json()).subscribe(data=>{
        console.log(data)
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
          subject: 'Booking details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,      
          key:this.addedAttachments,
          bookingId:this.duty.id 
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.passengerArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,
          key:this.addedAttachments,
          bookingId:this.duty.id       
        }
      }
      this.http.post('/Voip/sendMailBookingConfirm',temp,{headers:headers}).map(res=>res.json()).subscribe(data=>{
        console.log(data)
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
          subject: 'Booking details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,
          key:this.addedAttachments,
          bookingId:this.duty.id      
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.customerArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.duty.startDate).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML, 
          key:this.addedAttachments,
          bookingId:this.duty.id         
        }
      }
      this.http.post('/Voip/sendMailBookingConfirm',temp,{headers:headers}).map(res=>res.json()).subscribe(data=>{
        console.log(data)
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

  insertLog()
  {
    this.logs.forEach(element=>{
      this.callService.insertBookingLogs(element).subscribe(data=>{
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

  addAttachments(event,key)
  {
    console.log(this.addedAttachments);
    
    if(event.checked)
    {
      this.addedAttachments.push(key)
    }
    else
    {
      var i = this.addedAttachments.findIndex(x=>x===key);
      this.addedAttachments.splice(i,1);
    }
  }
  
}
