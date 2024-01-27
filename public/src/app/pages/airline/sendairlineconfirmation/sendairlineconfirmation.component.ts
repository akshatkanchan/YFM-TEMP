import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { User } from '../../../core/user';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Http } from '@angular/http';
import { AuthService } from '../../../core/auth.service';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import * as moment from 'moment';
import { FlightDetails } from '../bookairline/bookairline.component';
import { CallService } from '../../duties/call/call.service';
import { MatSnackBar } from '@angular/material';
import { MessagingService } from '../../../messaging.service';
import { AirlineService } from '../airlinedisp/airline.service';
import { CustomerService } from '../../masters/customer/customer.service';
import { Customer } from '../../masters/customer';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sendairlineconfirmation',
  templateUrl: './sendairlineconfirmation.component.html',
  styleUrls: ['./sendairlineconfirmation.component.scss']
})
export class SendairlineconfirmationComponent implements OnInit, AfterViewInit{
  
  callStatus;
  callNumber:number=0;
  deviceStatus = 'Offline';
  customNumber: any = '';
  customEmail: any = '';

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

  @ViewChild('dataPassengerTemplate') dataPassengerTemplate: ElementRef;

  mailBody: any;
  mailSubject: any = "Your booking has been confirmed";
  bookingDate = new Date().toISOString().split('T')[0];
  businessSettings: BusinessSettings = {};
  user: User = {};
  companyProfile: CompanyProfile = {};

  screenWidth : number;
  allPassengers:any[]=[];
  allBookedBy:any=[];
  booking: FlightDetails={};
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
  customerLogCount=0;
  passengerLogCount=0;
  driverLogCount=0;
  customLogCount=0;
  logDisplay:any[]=[];
  logs:any[]=[];
  mailPassenger:boolean=false;
  customer:Customer={};
  companyLogo:any=''

  ticketBookyBy=false;
  ticketPassenger=false;
  ticketCustomer=false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private http:Http, 
    private dialog:MatDialog, 
    private auth: AuthService,
    private companyProfileService: CompanyprofileService,
    private callService:CallService,
    private snackBar: MatSnackBar,
    private msgService:MessagingService,
    private airlineService:AirlineService,
    private customerService:CustomerService,
    private uploadService:FileuploadService,
    private _sanitizer:DomSanitizer,
  ) { }

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
          this.customer=data[0]
        })
                      
        this.allPassengers[0]={
          passengerNo: this.booking.guestMobile,
          passenger: this.booking.guestName,
          passengerEmail: this.booking.guestEmail,
        }
        this.allBookedBy[0]={
          bookByName: this.booking.bookByName,
          bookByNo: this.booking.bookByNo,
          bookByEmail: this.booking.bookByEmail,
        }

        
      
      this.callService.checkDevice(this.user).subscribe();        
        
        console.log(this.data)
        // this.callService.getAllPassengers({bookingId:this.data.bid}).subscribe(data=>{
          
        // })
  
        // this.callService.getAllBookedBy({bookingId:this.data.bid}).subscribe(data=>{
          
        // })
  
        this.callService.getFlightBookingLogs({flightBookingId:this.booking.id}).subscribe(data=>{
          this.logDisplay=data
        })
  
        // this.callService.getLogs({flightBookingId:this.data.id,type:'driver'}).subscribe(data=>{
        //   this.driverLogsDisplay=data
        // })
          console.log(this.allBookedBy, this.allPassengers);
        }  


      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0];

        this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
          this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
        })

        if(this.businessSettings.UseBookingsIDInSMS == true) {
          if(this.data.row.flightNoConnecting) {
            this.message ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate+".%0aYour Booking ID is "+this.data.row.id;
            this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate+".%0aYour Booking ID is "+this.data.row.id+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
          }
          else if(this.data.row.flightNoReturn) {
            this.message ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+".%0a"+this.data.row.to+"-"+this.data.row.from+".%0aDate: "+this.data.row.arrivalDate+".%0aYour Booking ID is "+this.data.row.id;
            this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+".%0a"+this.data.row.to+"-"+this.data.row.from+".%0a Date: "+this.data.row.arrivalDate+".%0aYour Booking ID is "+this.data.row.id+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
            if(this.data.row.flightNoConnectingReturn) {
              this.message ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+", "+this.data.row.flightNoConnectingReturn+" "+this.data.row.to+"-"+this.data.row.from+", "+this.data.row.connectingTo+"-"+this.data.row.connectingFrom+".%0aDate: "+this.data.row.arrivalDate+".%0aYour Booking ID is "+this.data.row.id;
              this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+", "+this.data.row.flightNoConnectingReturn+" "+this.data.row.to+"-"+this.data.row.from+", "+this.data.row.connectingTo+"-"+this.data.row.connectingFrom+".%0aDate: "+this.data.row.arrivalDate+".%0aYour Booking ID is "+this.data.row.id+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
            }
          }
          else {
            this.message ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate+".%0aYour Booking ID is "+this.data.row.id;
            this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate+".%0aYour Booking ID is "+this.data.row.id+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
          }          
        }
        else {
          if(this.data.row.flightNoConnecting) {
            this.message ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate;
            this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
          }
          else if(this.data.row.flightNoReturn) {
            this.message ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+" "+this.data.row.to+"-"+this.data.row.from+".%0aDate: "+this.data.row.arrivalDate;
            this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+" "+this.data.row.to+"-"+this.data.row.from+".%0aDate: "+this.data.row.arrivalDate+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
            if(this.data.row.flightNoConnectingReturn) {
              this.message ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+", "+this.data.row.flightNoConnectingReturn+" "+this.data.row.to+"-"+this.data.row.from+", "+this.data.row.connectingTo+"-"+this.data.row.connectingFrom+".%0aDate: "+this.data.row.arrivalDate;
              this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+", "+this.data.row.flightNoConnecting+".%0a"+this.data.row.from+"-"+this.data.row.to+", "+this.data.row.connectingFrom+"-"+this.data.row.connectingTo+".%0aDate: "+this.data.row.departureDate+".%0aFlight No(s): "+this.data.row.flightNoReturn+", "+this.data.row.flightNoConnectingReturn+" "+this.data.row.to+"-"+this.data.row.from+", "+this.data.row.connectingTo+"-"+this.data.row.connectingFrom+".%0aDate: "+this.data.row.arrivalDate+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
            }
          }
          else {
            this.message ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate;
            this.whatsappMessage ="Flight No(s): "+this.data.row.flightNo+".%0a"+this.data.row.from+"-"+this.data.row.to+".%0aDate: "+this.data.row.departureDate+".%0a%0a--%0aFrom: "+this.user.companyName+".%0aThis is a system generated message. Please do not respond. For any queries contact "+this.companyProfile.phone;
          }
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
        this.logs.push({flightBookingId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='passenger')
      {
        this.logs.push({flightBookingId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='customer')
      {
        this.logs.push({flightBookingId:this.data.row.id,log:"SMS was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({flightBookingId:this.data.row.id,log:"SMS was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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
    console.log(this.logs)
  }

  sendWhatsApp(event,number,type,name?)
  {
    if(event.checked)
    {
      if(type=='Booked By')
      {
        this.logs.push({flightBookingId:this.data.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='Passenger')
      {
        this.logs.push({flightBookingId:this.data.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='Customer')
      {
        this.logs.push({flightBookingId:this.data.id,log:"WhatsApp was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.customerLogCount=this.customerLogCount+1;
      }
      if(type=='custom')
      {
        this.logs.push({flightBookingId:this.data.id,log:"WhatsApp was sent to "+number+" on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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
        this.logs.push({flightBookingId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.bookedByArray.push(email)
        this.bookByLogCount=this.bookByLogCount+1;
      }
      if(type=='Passenger')
      {
        this.logs.push({flightBookingId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
        this.passengerArray.push(email)
        this.passengerLogCount=this.passengerLogCount+1
      }
      if(type=='Customer')
      {
        this.logs.push({flightBookingId:this.data.row.id,log:"Email was sent to "+name+" ("+type+") on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name,ownerId:this.user.ownerId});
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

    var key=[];
    var files=[];

    if(this.booking.ticket!=null)
    {
      key.push(this.user.companyName+"/flightTickets/"+this.booking.ticket )
      files.push(this.booking.ticket)
    }

    if(this.booking.returnTicket!=null)
    {
      key.push(this.user.companyName+"/flightTickets/"+this.booking.returnTicket )
      files.push(this.booking.returnTicket)
    }

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
          name: this.companyProfile.name,
          email:this.bookedByArray,
          cc: this.businessSettings.AutoCCEmail,
          subject: 'Booking details for '+moment(this.booking.departureDate).format("DD-MM-YYYY"),
          mailBody:this.dataPassengerTemplate.nativeElement.innerHTML,
          key:key,
          files:files
        }
      }    
      else {
        var temp = {
          name: this.companyProfile.name,
          email:this.bookedByArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.booking.departureDate).format("DD-MM-YYYY"),
          mailBody:this.dataPassengerTemplate.nativeElement.innerHTML,  
          key:key,
          files:files     
        }
      }

      if(this.ticketBookyBy==false)
      {
        delete temp.files;
        delete temp.key;
      }
      this.airlineService.emailTicket(temp).subscribe(data=>{
        console.log(data)
      },err=>{},()=>{
        this.snackBar.open("Email Sent", "X", {duration: 3000});
      });
    }
    if(this.passengerArray.length>0)
    {
      if(this.businessSettings.CCAllAllotmentEmails) {
        var temp = {
          name: this.companyProfile.name,
          email:this.passengerArray,
          cc: this.businessSettings.AutoCCEmail,
          subject: 'Booking details for '+moment(this.booking.departureDate).format("DD-MM-YYYY"),
          mailBody:this.dataPassengerTemplate.nativeElement.innerHTML, 
          key:key,
          files:files          
        }
      }    
      else {
        var temp = {
          name: this.companyProfile.name,
          email:this.passengerArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.booking.departureDate).format("DD-MM-YYYY"),
          mailBody:this.dataPassengerTemplate.nativeElement.innerHTML,
          key:key,
          files:files 
        }
      }

      if(this.ticketPassenger==false)
      {
        delete temp.files;
        delete temp.key;
      }
      this.airlineService.emailTicket(temp).subscribe(data=>{
        console.log(data)
      },err=>{},()=>{
        this.snackBar.open("Email Sent", "X", {duration: 3000});
      });
    }
    if(this.customerArray.length>0)
    {
      if(this.businessSettings.CCAllAllotmentEmails) {
        var temp = {
          name: this.companyProfile.name,
          email:this.customerArray,
          cc: this.businessSettings.AutoCCEmail,
          subject: 'Booking details for '+moment(this.booking.departureDate).format("DD-MM-YYYY"),
          mailBody:this.dataPassengerTemplate.nativeElement.innerHTML,
          key:key,
          files:files
        }
      }    
      else {
        var temp = {
          name: this.companyProfile.name,
          email:this.customerArray,
          cc: '',          
          subject: 'Booking details for '+moment(this.booking.departureDate).format("DD-MM-YYYY"),
          mailBody:this.dataPassengerTemplate.nativeElement.innerHTML,  
          key:key,
          files:files     
        }
      }

      if(this.ticketCustomer==false)
      {
        delete temp.files;
        delete temp.key;
      }
      this.airlineService.emailTicket(temp).subscribe(data=>{
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
      this.snackBar.open("Sent","X",{duration:3000})
    })

    this.insertLog();

  }

  insertLog()
  {
    this.logs.forEach(element=>{
      this.callService.insertFlightBookingLogs(element).subscribe(data=>{
        console.log(data)
      })
    })
  }

}
