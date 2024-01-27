import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../../core/user';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ExporthotelsComponent } from '../../hotels/exporthotels/exporthotels.component';
import { Http,Headers } from '@angular/http';
import { CustomerService } from '../../masters/customer/customer.service';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { startWith, map } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'exportbookings',
  templateUrl: './exportbookings.component.html',
  styleUrls: ['./exportbookings.component.scss']
})
export class ExportbookingsComponent implements OnInit {

  predefined;
  presets;
  preset;
  customerCtrl=new FormControl();
  permissionName=new FormControl();
  customer;
  customers:any;
  user:User={};
  columns=[];
  bookings={
    startDate:'',
    endDate:''
  }
  exportBookings:flightExport={};
  hotelData:any;
  constructor(
    private auth:AuthService,
    private dialogRef:MatDialogRef<ExportbookingsComponent>,
    private http:Http,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.auth.user.subscribe(data=>{
        this.user=data[0];
        this.exportBookings.ownerId=this.user.ownerId;
        this.getFlightProfiles(this.user).subscribe(data=>{
          console.log(data);
          this.presets=data;
        })
        if(this.user.type == 'employee') {
          var body = {
            userId: this.user.id
          }
          this.employeeService.getEmployeeForCustomer(body).subscribe(data => {
            this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(data => {
              console.log(data)
              if(data.length != 0) {              
                this.customers=data;
                this.customer=this.customerCtrl.valueChanges
                .pipe(
                  startWith(''),
                  map(val=>this.filterCustomer(val))
                );
              }
              else {
                this.getCustomer();
              }
            })
          })
        }
      })
      this.preset=this.fb.group({
        permissionName:['']
      })
    }
    predefinedRoles(temp) {
      this.columns=[];
      this.exportBookings=temp;
      if(this.exportBookings.fromLoc) {
        this.columns.push(`fb.from as 'From Location'`);
      } if(this.exportBookings.toLoc) {
        this.columns.push(`fb.to as 'To Location'`);
      } if(this.exportBookings.fromLoc) {
        this.columns.push(`fb.from as 'From Location'`);
      } if(this.exportBookings.departureDate) {
        this.columns.push(`fb.departureDate as 'Departure Date'`);
      } if(this.exportBookings.customerName) {
        this.columns.push(`fb.customerName as 'Customer Name'`);
      } if(this.exportBookings.bookByName){
        this.columns.push(`fb.bookByName as 'Booked By'`)
      } if(this.exportBookings.bookByNo){
        this.columns.push(`fb.bookByNo as 'Booked By No'`)
      } if(this.exportBookings.bookByEmail){
        this.columns.push(`fb.bookByEmail as 'Booked By Email'`)
      } if(this.exportBookings.guestName){
        this.columns.push(`fb.guestName as 'Guest Name'`)
      }  if(this.exportBookings.handlingCharges){
        this.columns.push(`fb.handlingCharges as 'Handling Charges'`)
      } if(this.exportBookings.flightNo){
        this.columns.push(`fb.flightNo as 'Flight Number'`)
      } if(this.exportBookings.arrivalDate){
        this.columns.push(`fb.arrivalDate as 'Arrival Date'`)
      } if(this.exportBookings.flightNoReturn){
        this.columns.push(`fb.flightNoReturn as 'Flight No Return'`)
      } if(this.exportBookings.flightNoConnecting){
        this.columns.push(`fb.flightNoConnecting as 'FlightNoConnecting'`)
      } if(this.exportBookings.flightNoConnectingReturn){
        this.columns.push(`fb.flightNoConnectingReturn as 'Booked By Email'`)
      } if(this.exportBookings.isInternational){
        this.columns.push(`fb.isInternational as 'International'`)
      } if(this.exportBookings.status){
        this.columns.push(`fb.status as 'Status'`)
      } if(this.exportBookings.connectingReturnFrom){
        this.columns.push(`fb.connectingReturnFrom as 'Connecting Return From'`)
      } if(this.exportBookings.connectingReturnTo){
        this.columns.push(`fb.connectingReturnTo as 'Connecting Return To'`)
      }if(this.exportBookings.invoiceNumber){
        this.columns.push(`iv.invoiceNumber as 'Invoice Number'`)
      }if(this.exportBookings.invoiceDate){
        this.columns.push(`iv.invoiceDate as 'Invoice Date'`)
      }if(this.exportBookings.invoicePeriodFrom){
        this.columns.push(`iv.invoicePeriodFrom as 'Invoice Period'`)
      }if(this.exportBookings.invoicePeriodTo){
        this.columns.push(`iv.invoicePeriodTo as 'Invoice Period To'`)
      }if(this.exportBookings.poNumber){
        this.columns.push(`iv.poNumber as 'PO Number'`)
      }if(this.exportBookings.ccNumber){
        this.columns.push(`iv.ccNumber as 'CC Number'`)
      }if(this.exportBookings.totalAmount){
        this.columns.push(`iv.totalAmount as 'totalAmount'`)
      }if(this.exportBookings.taxType){
        this.columns.push(`iv.taxType as 'Tax Type'`)
      }if(this.exportBookings.taxRate){
        this.columns.push(`iv.taxRate as 'Tax Rate'`)
      }if(this.exportBookings.taxAmount){
        this.columns.push(`iv.taxAmount as 'Tax Amount'`)
      }if(this.exportBookings.discountType){
        this.columns.push(`iv.discountType as 'Discount Type'`)
      }if(this.exportBookings.discountAmount){
        this.columns.push(`iv.discountAmount as 'Discount Amount'`);
      }if(this.exportBookings.advancedReceived){
        this.columns.push(`iv.advanceReceived as 'Advanced Received'`);
      }if(this.exportBookings.extraCharges){
        this.columns.push(`sum(ie.amount) as 'Total Extra Charges'`);
      }
      console.log(this.columns) 
    }
    getCustomer() {
      this.customerService.getCustomers(this.user).subscribe(data=>{
        console.log(data);
        
        this.customers=data;
        this.customer=this.customerCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterCustomer(val))
        );
      });
    }
  
    filterCustomer(val:string){
      return this.customers.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
    }
    
    getFlightBookings() {
      var temp={
        columns:this.columns
      }
      this.getFlightBookingsForExport(temp).subscribe(data=>{
        console.log(data)
        this.hotelData=data;
      })
    }
    closeDialog() {
      this.dialogRef.close();
    }
  change(event,temp) {
    console.log(event)
    console.log(temp)
    if(event.checked == true) {
      this.columns.push(temp)
      console.log(this.columns)
    } 
    if (event.checked == false) {
      console.log(temp)
      var index = this.columns.findIndex(x=>x === temp)
      this.columns.splice(index,1);
      console.log(this.columns);
      
    }
  }
  savePreset() {
    this.exportBookings.name=this.preset.get('permissionName').value;
    this.addFlightProfiles(this.exportBookings).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Preset Saved", "X", {duration: 3000});
    });    
  }
  getFlightBookingsForExport(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/getFlightBookingForExports',temp,{headers:headers}).map(res=>res.json());
  }
  addFlightProfiles(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/addFlightBookingExportsProfiles',temp,{headers:headers}).map(res=>res.json());
  }
  getFlightProfiles(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/getFlightBookingExportsProfiles',temp,{headers:headers}).map(res=>res.json());  
  }
}

export interface flightExport {
  name?:string;
  fromLoc?:boolean;
  toLoc?:boolean;
  departureDate?:boolean;
  customerName?:boolean;
  bookByName?:boolean;
  bookByNo?:boolean;
  bookByEmail?:boolean;
  guestName?:boolean;
  price?:boolean;
  guestMobile?:boolean;
  handlingCharges?:boolean;
  flightNo?:boolean;
  arrivalDate?:boolean;
  flightNoReturn?:boolean;
  flightNoConnecting?:boolean;
  flightNoConnectingReturn?:boolean;
  isInternational?:boolean;
  status?:boolean;
  connectingReturnFrom?:boolean;
  connectingReturnTo?:boolean;
  invoiceNumber?:boolean;
  invoiceDate?:boolean 
  invoicePeriodFrom?:boolean
  invoicePeriodTo?:boolean
  poNumber?:boolean
  ccNumber?:boolean 
  totalAmount?:boolean 
  taxType?:boolean
  taxRate?:boolean
  taxAmount?:boolean
  discountType?:boolean
  discountAmount?:boolean
  invoiceStatus?:boolean
  advancedReceived?:boolean
  extraCharges?:boolean
  ownerId?:string;
}