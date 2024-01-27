import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/user';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Booking } from '../booking';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CustomerService } from '../../masters/customer/customer.service';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { AuthService } from '../../../core/auth.service';
import { startWith, map } from 'rxjs/operators';
import { ExportService } from './export.service';
import * as XLSX from 'xlsx';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'exportbookings',
  templateUrl: './exportbookings.component.html',
  styleUrls: ['./exportbookings.component.scss']
})
export class ExportbookingsComponent implements OnInit {

  user: User={}
  customers:any[];
  customer:any;
  customerCtrl:FormControl=new FormControl();
  bookings: Booking={};
  columns=[];
  exportBookings: ExportBookings = {
    name: '',
    bookingId: false,     
    cname: false,
    bookBy: false,
    bookByNo: false,
    bookByEmail: false,
    passenger: false,
    passengerNo: false,
    passengerEmail: false,
    fromLoc: false,
    toLoc: false,
    startDate: false,
    endDate: false,
    reportingTime: false,
    startFromGarage: false,
    reportingAddress: false,
    dropAddress: false,
    shortReportingAddress: false,
    flightTrainNo: false,
    dispatchCenter: false,
    billTo: false,
    price: false,
    remarks: false,
    operatorNotes: false,
    label: false,
    vehicleGroup: false,
    dutyType: false, 
    totalPrice: false,
    ownerId: '',  
    poNumber: false,
    ccId: false,
    extraHours: false,
    extraKms: false,
  };
  preset:FormGroup
  predefined:any;
  presets: ExportBookings;

  constructor(
    public dialog: MatDialog,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private auth: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private exportService: ExportService,
    private bookingService:BookingsService
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data=> {
      this.user=data[0]
      this.bookings.ownerID=data[0].ownerId
      this.exportBookings.ownerId=data[0].ownerId
      if(this.user.type == 'employee') {
        var body = {
          userId: this.user.id
        }
        this.employeeService.getEmployeeForCustomer(body).subscribe(data => {
          this.employeeService.getEmployeeLimitCustomerForEmployee(data[0]).subscribe(data => {
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
      else {
        this.getCustomer();
      }
      this.exportService.getExportBookingProfile(this.user).subscribe(data=>{
        this.presets = data;   
        console.log(this.presets)
      })
    })
    this.preset=this.fb.group({
      permissionName:['']
    })
  }

  setCustomer(temp:any,event:any) {
    if(event.source.selected==true) {
      this.bookings.cname = temp.name      
      this.bookings.customerId = temp.id;
      this.exportBookings.cname = temp.name;                              
    }
    if(this.exportBookings.cname){
      this.columns.push(`cname as 'Customer Name'`);
    }
  }

  getCustomer() {
    this.customerService.getCustomers(this.user).subscribe(data=>{
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

  closeDialog() {
    this.dialog.closeAll();
  }

  bookingsData;
  getBookingsForExport() {
    console.log("DAS")
    var temp={
      columns:this.columns,
      startDate:this.bookings.startDate,
      endDate:this.bookings.endDate,
      customerId:this.bookings.customerId
    }
    this.bookingService.getBookingsForExport(temp).subscribe(data=>{
      this.bookingsData=data;
      console.log(data)
    })
    this.exportBooking()
  }
  exportBooking() {
    console.log(this.exportBookings);
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(this.bookingsData);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
    XLSX.writeFile(workBook,"_Duties.xlsx")
    
  }

  savePreset(){
    delete this.exportBookings.id;
    this.exportBookings.name=this.preset.get('permissionName').value;
    this.exportService.addExportBookingProfile(this.exportBookings).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Preset Saved", "X", {duration: 3000});
    });    
  }
  change(event:any,temp) {
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
  predefinedRoles(temp){
    this.columns=[];
    console.log(temp)
    this.exportBookings=temp
    if(this.exportBookings.bookingId) {
      this.columns.push(`id as 'Booking Id'`);
    } if(this.exportBookings.name) {
      this.columns.push(`name as 'Name'`);
    } if(this.exportBookings.cname) {
      this.columns.push(`cname as 'Customer Name'`);
    } if(this.exportBookings.bookBy) {
      this.columns.push(`bookBy as 'Book By'`);
    }  if(this.exportBookings.bookByEmail){
      this.columns.push(`bookByEmail as 'Booked By Email'`)
    } if(this.exportBookings.bookByNo){
      this.columns.push(`bookByNo as 'Booked By No'`)
    } if(this.exportBookings.cname) {
      this.columns.push(`cname as 'Customer Name'`)
    } if(this.exportBookings.ccId){
      this.columns.push(`ccId as 'CCID'`)
    } if(this.exportBookings.passenger){
      this.columns.push(`passenger as 'Passenger'`)
    } if(this.exportBookings.passengerEmail){
      this.columns.push(`passengerEmail as 'Passenger Email'`)
    } if(this.exportBookings.passengerNo){
      this.columns.push(`passengerNo as 'Passenger No'`)
    } if(this.exportBookings.fromLoc){
      this.columns.push(`fromLoc as 'From Location'`)
    } if(this.exportBookings.toLoc){
      this.columns.push(`toLoc as 'To Location'`)
    } if(this.exportBookings.startDate){
      this.columns.push(`startDate as 'Start Date'`)
    } if(this.exportBookings.endDate){
      this.columns.push(`endDate as 'End Date'`)
    } if(this.exportBookings.reportingTime){
      this.columns.push(`reportingTime as 'Reporting Time'`)
    } if(this.exportBookings.startFromGarage){
      this.columns.push(`startFromGarage as 'Start From Garage'`)
    } if(this.exportBookings.reportingAddress){
      this.columns.push(`reportingAddress as 'Reporting Address'`)
    } if(this.exportBookings.shortReportingAddress){
      this.columns.push(`shortReportingAddress as 'Short Reporting Address'`)
    } if(this.exportBookings.dropAddress){
      this.columns.push(`dropAddress as 'Drop Address'`)
    } if(this.exportBookings.flightTrainNo){
      this.columns.push(`flightTrainNo as 'Flight/Train No'`)
    } if(this.exportBookings.poNumber){
      this.columns.push(`bo.poNumber as 'PO Number'`)
    } if(this.exportBookings.dispatchCenter){
      this.columns.push(`dispatchCenter as 'Dispatch Center'`)
    } if(this.exportBookings.billTo){
      this.columns.push(`billTo as 'Billed To'`)
    } if(this.exportBookings.price){
      this.columns.push(`price as 'Price'`)
    } if(this.exportBookings.operatorNotes){
      this.columns.push(`operatorNotes as 'Operator Notes'`)
    } if(this.exportBookings.remarks){
      this.columns.push(`remarks as 'Remarks'`)
    } if(this.exportBookings.dutyType){
      this.columns.push(`dutyType as 'Duty Type'`)
    } if(this.exportBookings.label){
      this.columns.push(`label as 'Label'`)
    } if(this.exportBookings.vehicleGroup){
      this.columns.push(`vehicleGroup as 'Vehicle Group'`)
    } if(this.exportBookings.totalPrice){
      this.columns.push(`bo.totalPrice as 'Total Price'`)
    } if(this.exportBookings.extraHours){
      this.columns.push(`extraHours as 'Extra Hours'`)
    } if(this.exportBookings.extraKms){
      this.columns.push(`extraKms as 'Extra Kms'`)
    } 
  }

}

export interface ExportBookings {
  id?: string;
  name?: string;
  bookingId?: boolean
  cname?: boolean;
  bookBy?: boolean; 
  bookByNo?: boolean;
  bookByEmail?: boolean;
  passenger?: boolean;
  passengerNo?: boolean; 
  passengerEmail?: boolean;
  fromLoc?: boolean;
  toLoc?: boolean;
  startDate?: boolean;
  endDate?: boolean;
  reportingTime?: boolean;
  startFromGarage?: boolean;
  reportingAddress?: boolean;
  dropAddress?: boolean;
  shortReportingAddress?: boolean;
  flightTrainNo?: boolean;
  dispatchCenter?: boolean;
  billTo?: boolean;
  price?: boolean;
  remarks?: boolean;
  operatorNotes?: boolean;
  label?: boolean;  
  vehicleGroup?: boolean;
  dutyType?: boolean;    
  totalPrice?: boolean
  ownerId?: string;    
  poNumber?: boolean;
  ccId?: boolean;
  extraHours?: boolean;
  extraKms?: boolean;
}
