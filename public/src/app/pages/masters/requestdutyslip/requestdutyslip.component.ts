import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Http } from '@angular/http';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { MessagingService } from '../../../messaging.service';
import * as moment from 'moment'
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CallService } from '../../duties/call/call.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'requestdutyslip',
  templateUrl: './requestdutyslip.component.html',
  styleUrls: ['./requestdutyslip.component.scss']
})
export class RequestdutyslipComponent implements OnInit {

  mailBody: any;
  mailSubject: any = "Duty Slip Request";
  bookingDate = new Date().toISOString().split('T')[0];
  user: User = {};
  companyProfile: CompanyProfile = {};
  businessSettings: BusinessSettings = {};
  callStatus;
  callNumber:number=0;
  deviceStatus = 'Offline';
  customNumber: any = '';
  customEmail: any = '';


  screenWidth : number;
  message:string='';
  messageLength: number;
  whatsappMessage:string='';
  whatsappMessageLength: number;
  smsArray:any[]=[];
  whatsAppArray:any[]=[];
  supplierArray:any[]=[];
  supplierLogCount=0;
  customLogCount=0;
  logDisplay:any[]=[];
  logs:any[]=[];
  mailPassenger:boolean=false;
  companyLogo:any='';

  ngAfterViewInit(): void {
    this.msgService.receiveMessage()
    this.callStatus = this.msgService.currentMessage
    this.callStatus.subscribe(payload=>{
      if(payload) {
        this.callNumber = this.checkNumber(payload)
        if(this.callNumber != 0) {
          this.deviceStatus = 'Online'
        }
      }
    })
  }

  @ViewChild('template') template: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private http:Http, 
    private dialog:MatDialog,
    private companyProfileService: CompanyprofileService,
    private auth: AuthService,
    private msgService:MessagingService,
    private uploadService : FileuploadService,
    private _sanitizer:DomSanitizer,
    private callService:CallService,
    private snackBar: MatSnackBar,
  ) {
    console.log(data)
  }

  ngOnInit() {
    this.auth.businessSettings.subscribe(data => {
      this.businessSettings=data;
    })
    this.callService.checkDevice(this.user).subscribe()
    this.callService.getLogs({dutyId:this.data.id,type: '',ownerId:this.user.ownerId}).subscribe(data=>{
      this.logDisplay=data
    })
    this.auth.user.subscribe(data => {
      this.user = data[0]
      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0];
      
        this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
          this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
        })

        this.message = "Duty Slip request for the following duty: %0aDate: "+this.data.startDate+".%0aVehicle Group: "+this.data.vehicleGroup+".%0aPassenger: "+this.data.passenger+" ("+this.data.passengerNo+")";
        this.whatsappMessage = "Duty Slip request for the following duty: %0aDate: "+this.data.startDate+".%0aVehicle Group: "+this.data.vehicleGroup+".%0aPassenger: "+this.data.passenger+" ("+this.data.passengerNo+").%0a%0a--%0aFrom: "+this.user.companyName+".%0a This is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
      })
    })
  }

  sendSMS(event,number,type,name?) {
    if(event.checked) {
      if(type=='supplier') {
        this.logs.push({bookingId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type: '',ownerId:this.user.ownerId});
        this.supplierLogCount=this.supplierLogCount+1;
      }
      if(type=='custom') {
        this.logs.push({bookingId:this.data.row.id,log:"SMS was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type: '',ownerId:this.user.ownerId});
        this.customLogCount=this.customLogCount+1;
      }
      this.smsArray.push(number)
      console.log(this.smsArray);
      console.log(this.logs);
    }
    else {
      if(type=='custom') {
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

  sendWhatsApp(event,number,type,name?) {
    if(event.checked) {
      if(type=='supplier') {
        this.logs.push({bookingId:this.data.row.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type: '',ownerId:this.user.ownerId});
        this.supplierLogCount=this.supplierLogCount+1;
      }
      if(type=='custom') {
        this.logs.push({bookingId:this.data.row.id,log:"WhatsApp was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type: '',ownerId:this.user.ownerId});
        this.customLogCount=this.customLogCount+1;
      }
      this.whatsAppArray.push(number)
      console.log(this.whatsAppArray);
    }
    else {
      if(type=='custom') {
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

  sendEmail(event,email,type,name?) {
    if(event.checked) {
      if(type=='supplier') {
        this.logs.push({bookingId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,type: '',ownerId:this.user.ownerId});
        this.supplierArray.push(email)
        this.supplierLogCount=this.supplierLogCount+1;
      }
    }
    else {
      if(type=='supplier') {
        this.supplierArray.pop();
        this.supplierLogCount=this.supplierLogCount+1;
      }
      for(var i=0; i<this.logs.length; i++) {
        if(this.logs[i].log.indexOf("Email was sent to "+name+" ("+type+")")!=-1) {
          this.logs.splice(i,1)
        }
      } 
    }
  }

  sendMail(div1: HTMLDivElement) {
    this.mailBody = div1;
    var temp = {
      companyEmail: this.companyProfile.email,
      name: this.companyProfile.name,
      email: this.data.bookByEmail,
      subject: this.mailSubject,
      mailBody:this.mailBody.innerHTML,      
    }
    console.log(temp)
    this.http.post('/Voip/sendMail',temp).subscribe(data=>{
      console.log(data)      
    })
    console.log(this.mailSubject)
    console.log(this.mailBody.innerHTML)
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

  checkNumber(data) {
    try {
      var notify = JSON.parse(data.notification.body)
      return notify.number
    }
    catch (e) {
      return 0;
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  messageSize() {
    this.messageLength = Math.ceil(this.message.length/160);
    return this.messageLength;
  }

  send()
  {
    if(this.customEmail != '') {
      if(this.customEmail.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
        this.supplierArray.push(this.customEmail)
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
    if(this.supplierArray.length>0)
    {
      if(this.businessSettings.CCAllAllotmentEmails) {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.supplierArray,
          cc: this.businessSettings.AutoCCEmail,
          subject: this.mailSubject,
          mailBody:this.template.nativeElement.innerHTML,        
        }
      }    
      else {
        var temp = {
          companyEmail: this.companyProfile.email,
          name: this.companyProfile.name,
          email:this.supplierArray,
          cc: '',          
          subject: this.mailSubject,
          mailBody:this.template.nativeElement.innerHTML,          
        }
      }
      this.http.post('/Voip/sendMail',temp).map(res=>res.json()).subscribe(data=>{
        console.log(data)
      });
    }

    var count = {
      sms:this.smsArray.length,
      whatsApp:this.whatsAppArray.length,
      email:this.supplierArray.length,
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
}
