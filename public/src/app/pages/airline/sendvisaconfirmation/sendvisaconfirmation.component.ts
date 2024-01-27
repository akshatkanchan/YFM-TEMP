import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { User } from '../../../core/user';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Http } from '@angular/http';
import { AuthService } from '../../../core/auth.service';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { VisaService } from '../visa/visa.service';
import * as moment from 'moment';
import { Visa } from '../addvisa/addvisa.component';
import { CallService } from '../../duties/call/call.service';
import { MatSnackBar } from '@angular/material';
import { MessagingService } from '../../../messaging.service';
import { Customer } from '../../masters/customer';
import { CustomerService } from '../../masters/customer/customer.service';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sendvisaconfirmation',
  templateUrl: './sendvisaconfirmation.component.html',
  styleUrls: ['./sendvisaconfirmation.component.scss']
})
export class SendvisaconfirmationComponent implements OnInit, AfterViewInit{
  
  callStatus;
  callNumber:number=0;
  deviceStatus = 'Offline';
  customNumber: any = '';
  customEmail: any = '';
  companyLogo:any='';
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

  @ViewChild('dutyPassengerTemplate') dutyPassengerTemplate: ElementRef;

  mailBody: any;
  mailSubject: any = "Your booking has been confirmed";
  bookingDate = new Date().toISOString().split('T')[0];
  businessSettings: BusinessSettings = {};
  user: User = {};
  companyProfile: CompanyProfile = {};
  travellers: any = [];

  screenWidth : number;
  allPassengers:any[]=[];
  allBookedBy:any=[];
  booking: Visa={};
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
  driverLogCount=0;
  customerLogCount=0;
  customLogCount=0;
  logDisplay:any[]=[];
  logs:any[]=[];
  mailPassenger:boolean=false;
  customer:Customer={}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private http:Http, 
    private dialog:MatDialog, 
    private auth: AuthService,
    private companyProfileService: CompanyprofileService,
    private visaService: VisaService,
    private callService:CallService,
    private snackBar: MatSnackBar,
    private msgService:MessagingService,
    private customerService:CustomerService,
    private uploadService:FileuploadService,
    private _sanitizer:DomSanitizer,
  ) { 
    
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.auth.businessSettings.subscribe(data => {
      this.businessSettings=data;
    })
    this.auth.user.subscribe(data => {
      this.user = data[0]

      this.booking = this.data.row;

      if(data) {

        this.customerService.getSingleCustomer({customerId:this.booking.customerId}).subscribe(data=>{
          console.log(data);
          
          this.customer=data[0]
        })
                      
        this.visaService.getVisaTravellers(this.data.row).subscribe(data => {
          this.travellers = data;
          this.allPassengers = data;
          this.allBookedBy[0]={
            bookByName: this.booking.bookBy,
            bookByNo: this.booking.bookByNo,
            bookByEmail: this.booking.bookByEmail,
          }
          
        
        this.callService.checkDevice(this.user).subscribe();        
          console.log(this.allBookedBy, this.allPassengers);
          console.log(this.data)
        })

        this.visaService.getVisaFiles({id:this.booking.id}).subscribe(data=>{
          this.emailAttachments=true
          this.attachments = data
        })
        
        
        // this.callService.getAllPassengers({bookingId:this.data.bid}).subscribe(data=>{
          
        // })
  
        // this.callService.getAllBookedBy({bookingId:this.data.bid}).subscribe(data=>{
          
        // })
  
        this.callService.getVisaLogs({visaId:this.booking.id}).subscribe(data=>{
          this.logDisplay=data
        })
  
        // this.callService.getLogs({visaId:this.data.row.id,type:'driver'}).subscribe(data=>{
        //   this.driverLogsDisplay=data
        // })
          
        }  

      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0];

        this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
          this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
        })

        if(this.businessSettings.UseBookingsIDInSMS == true) {
          this.message ="Location: "+this.data.row.location+".%0aType: "+this.data.row.visaType+".%0aFrom: "+moment(this.data.row.from).format('DD-MM-YYYY')+".%0aTo: "+moment(this.data.row.to).format('DD-MM-YYYY')+".%0aCost: "+this.data.row.visaCost+".%0aYour Booking ID is "+this.data.row.id;
          this.whatsappMessage ="Location: "+this.data.row.location+".%0aType: "+this.data.row.visaType+".%0aFrom: "+moment(this.data.row.from).format('DD-MM-YYYY')+".%0aTo: "+moment(this.data.row.to).format('DD-MM-YYYY')+".%0aCost: "+this.data.row.visaCost+".%0aYour Booking ID is "+this.data.row.id+".%0a%0a--%0aFrom: "+this.user.companyName+".%0a This is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
        }
        else {
          this.message ="Location: "+this.data.row.location+".%0aType: "+this.data.row.visaType+".%0aFrom: "+moment(this.data.row.from).format('DD-MM-YYYY')+".%0aTo: "+moment(this.data.row.to).format('DD-MM-YYYY')+".%0aCost: "+this.data.row.visaCost;
          this.whatsappMessage ="Location: "+this.data.row.location+".%0aType: "+this.data.row.visaType+".%0aFrom: "+moment(this.data.row.from).format('DD-MM-YYYY')+".%0aTo: "+moment(this.data.row.to).format('DD-MM-YYYY')+".%0aCost: "+this.data.row.visaCost+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
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
    this.callService.makeCall(temp);
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
      this.snackBar.open("Mail Sent", "X", {duration: 3000});
      this.dialog.closeAll();
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
        this.logs.push({visaId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='passenger')
      {
        this.logs.push({visaId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='customer')
      {
        this.logs.push({visaId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({visaId:this.data.row.id,log:"SMS was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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
        this.logs.push({visaId:this.data.row.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='passenger')
      {
        this.logs.push({visaId:this.data.row.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='customer')
      {
        this.logs.push({visaId:this.data.row.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({visaId:this.data.row.id,log:"WhatsApp was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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
        this.logs.push({visaId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookedByArray.push(email)
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='passenger')
      {
        this.logs.push({visaId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerArray.push(email)
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='customer')
      {
        this.logs.push({visaId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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
      this.callService.sendSMS({number:this.smsArray,message:this.message}).subscribe(data => {}, err => {}, () => {
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
          subject: 'Booking details for '+moment(this.booking.from).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,     
          key:this.addedAttachments,
          bookingId:this.booking.id      
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.bookedByArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.booking.from).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,     
          key:this.addedAttachments,
          bookingId:this.booking.id        
        }
      }
      this.http.post('/Voip/sendMailVisaConfirm',temp).map(res=>res.json()).subscribe(data=>{
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
          subject: 'Booking details for '+moment(this.booking.from).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,      
          key:this.addedAttachments,
          bookingId:this.booking.id       
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.passengerArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.booking.from).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,   
          key:this.addedAttachments,
          bookingId:this.booking.id          
        }
      }
      this.http.post('/Voip/sendMailVisaConfirm',temp).map(res=>res.json()).subscribe(data=>{
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
          subject: 'Booking details for '+moment(this.booking.from).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,  
          key:this.addedAttachments,
          bookingId:this.booking.id         
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.customerArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.booking.from).format("DD-MM-YYYY"),
          mailBody:this.dutyPassengerTemplate.nativeElement.innerHTML,  
          key:this.addedAttachments,
          bookingId:this.booking.id           
        }
      }
      this.http.post('/Voip/sendMailVisaConfirm',temp).map(res=>res.json()).subscribe(data=>{
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

  insertLog()
  {
    this.logs.forEach(element=>{
      this.callService.insertVisaLogs(element).subscribe(data=>{
        console.log(data)
      })
    })

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
