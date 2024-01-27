import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BookingsService } from '../bookings.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { CustomerService } from '../../masters/customer/customer.service';
import { startWith,map } from 'rxjs/operators';
import * as XLSX from 'xlsx'
import { ExportService } from '../exportbookings/export.service';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'bookingsexport',
  templateUrl: './bookingsexport.component.html',
  styleUrls: ['./bookingsexport.component.scss']
})
export class BookingsexportComponent implements OnInit {

  columns=[];
  bookingData:any[];
  filterStart:any='';
  filterEnd: any='';
  user:User={};
  temp={
    customerId:'',
    startDate:'',
    endDate:'',
    columns:this.columns,
  };
  customers:any[];
  customer:any;
  customerCtrl:FormControl=new FormControl();
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
    public dialog: MatDialog,private bookingService:BookingsService,private auth:AuthService,
    private employeeService: EmployeeService,
    private customerService:CustomerService,
    private exportService: ExportService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
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
        this.presets=data;
    })
    })
    this.preset=this.fb.group({
      permissionName:['']
    })
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
  filterByDate(){
    console.log(this.columns)
    let startDate=moment(this.filterStart).format('YYYY-MM-DD');
    let endDate=moment(this.filterEnd).format('YYYY-MM-DD');
    this.temp.startDate = startDate
    this.temp.endDate = endDate
    this.temp.columns = this.columns
    this.bookingService.getBookingForExport(this.temp).subscribe(data=>{
      console.log(data)
      this.bookingData=data
      this.exportBooking();
    })
  }

  change(event:any,temp) {
    console.log(event)
    if(event.checked == true) {
      this.columns.push(temp)
    }
  }

  setCustomer(temp:any,event:any)
  {
    console.log(temp)
    if(event.source.selected==true)
    {
      this.temp.customerId=temp.id;
    }

  }
  closeDialog() {
    this.dialog.closeAll();
  }
  exportBooking() {
    console.log(this.bookingData)
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(this.bookingData);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
    XLSX.writeFile(workBook,"_Bookings.xlsx")
  }
  savePreset(){
    delete this.exportBookings.id;
    this.exportBookings.name=this.preset.get('permissionName').value;
    this.exportService.addExportBookingProfile(this.exportBookings).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Preset Saved", "X", {duration: 3000});
    });    
  }

  predefinedRoles(temp){
    console.log(temp)
    this.exportBookings=temp
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
