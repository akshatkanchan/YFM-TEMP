import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { CustomerService } from '../../masters/customer/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../core/user';
import { startWith, map } from 'rxjs/operators';
import { Duty } from '../duty';
import { MatSnackBar } from '@angular/material';
import { ExportService } from '../../operations/exportbookings/export.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { DutiesService } from '../duties.service';

@Component({
  selector: 'exportduties',
  templateUrl: './exportduties.component.html',
  styleUrls: ['./exportduties.component.scss']
})
export class ExportdutiesComponent implements OnInit {

  user: User={}
  customers:any[];
  customer:any;
  customerCtrl:FormControl=new FormControl();
  bookings: Duty={};
  exportBookings: ExportDuties = {
    name: '',
    bookingId: false,
    dutyId: false,
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
    startKm:false,
    endKm:false,
    taxableAmount:false,
    nonTaxableAmount:false,
    driverNumber:false,
    dutyCreatedAt:false,
    invoiceTotal:false,
    extraCharges:false,
    extraChargesAmount:false,
    extraChargesTotal:false
  };
  dutiesData:any[];
  preset:FormGroup
  predefined:any;
  presets: ExportDuties;
  columns=[];

  constructor(
    public dialog: MatDialog,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private auth:AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private exportService: ExportService,
    private dutiesService:DutiesService,
    private cd : ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data=> {
      this.user=data[0]
      this.bookings.ownerId=data[0].ownerId
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
      this.exportService.getExportDutyProfile(this.user).subscribe(data=>{
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
  getDuties() {
    let startDate=moment(this.bookings.startDate).format('YYYY-MM-DD');
    let endDate=moment(this.bookings.endDate).format('YYYY-MM-DD');
    var temp = {
      startDate:startDate,
      endDate:endDate,
      customerId:this.bookings.customerId,
      columns:this.columns
    }
    this.dutiesService.getDutiesForExport(temp).subscribe(data=>{
      this.dutiesData=data;
      console.log(this.dutiesData)
      this.columns.forEach(element => {
      })
      // this.exportDuties();
    })
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
  exportDuties() {
    console.log(this.exportBookings);
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(this.dutiesData);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
    XLSX.writeFile(workBook,"_Duties.xlsx")
    
  }

  savePreset(){
    delete this.exportBookings.id;
    this.exportBookings.name=this.preset.get('permissionName').value;
    this.exportService.addExportDutyProfile(this.exportBookings).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Preset Saved", "X", {duration: 3000});
    });    
  }

  predefinedRoles(temp){
    this.columns=[];
    console.log(temp)
    this.cd.detectChanges();
    this.exportBookings=temp
    if(this.exportBookings.id){
      this.columns.push(`d.bid as 'Booking ID'`)
    } if(this.exportBookings.bookBy){
      this.columns.push(`d.bookBy as 'Booked By'`)
    } if(this.exportBookings.bookByEmail){
      this.columns.push(`d.bookByEmail as 'Booked By Email'`)
    } if(this.exportBookings.bookByNo){
      this.columns.push(`d.bookByNo as 'Booked By No'`)
    } if(this.exportBookings.cname) {
      this.columns.push(`d.cname as 'Customer Name'`)
    } if(this.exportBookings.dutyId){
      this.columns.push(`d.id as 'Duty Id'`)
    } if(this.exportBookings.ccId){
      this.columns.push(`bo.ccId as 'CCID'`)
    } if(this.exportBookings.passenger){
      this.columns.push(`d.passenger as 'Passenger'`)
    } if(this.exportBookings.passengerEmail){
      this.columns.push(`d.passengerEmail as 'Passenger Email'`)
    } if(this.exportBookings.passengerNo){
      this.columns.push(`d.passengerNo as 'Passenger No'`)
    } if(this.exportBookings.fromLoc){
      this.columns.push(`d.fromLoc as 'From Location'`)
    } if(this.exportBookings.toLoc){
      this.columns.push(`d.toLoc as 'To Location'`)
    } if(this.exportBookings.startDate){
      this.columns.push(`d.startDate as 'Start Date'`)
    } if(this.exportBookings.endDate){
      this.columns.push(`d.endDate as 'End Date'`)
    } if(this.exportBookings.reportingTime){
      this.columns.push(`d.reportingTime as 'Reporting Time'`)
    } if(this.exportBookings.startFromGarage){
      this.columns.push(`d.startFromGarage as 'Start From Garage'`)
    } if(this.exportBookings.reportingAddress){
      this.columns.push(`d.reportingAddress as 'Reporting Address'`)
    } if(this.exportBookings.shortReportingAddress){
      this.columns.push(`d.shortReportingAddress as 'Short Reporting Address'`)
    } if(this.exportBookings.dropAddress){
      this.columns.push(`d.dropAddress as 'Drop Address'`)
    } if(this.exportBookings.flightTrainNo){
      this.columns.push(`d.flightTrainNo as 'Flight/Train No'`)
    } if(this.exportBookings.poNumber){
      this.columns.push(`bo.poNumber as 'PO Number'`)
    } if(this.exportBookings.dispatchCenter){
      this.columns.push(`d.dispatchCenter as 'Dispatch Center'`)
    } if(this.exportBookings.billTo){
      this.columns.push(`d.billTo as 'Billed To'`)
    } if(this.exportBookings.price){
      this.columns.push(`d.price as 'Price'`)
    } if(this.exportBookings.operatorNotes){
      this.columns.push(`d.operatorNotes as 'Operator Notes'`)
    } if(this.exportBookings.remarks){
      this.columns.push(`d.remarks as 'Remarks'`)
    } if(this.exportBookings.dutyType){
      this.columns.push(`d.dutyType as 'Duty Type'`)
    } if(this.exportBookings.label){
      this.columns.push(`d.label as 'Label'`)
    } if(this.exportBookings.vehicleGroup){
      this.columns.push(`d.vehicleGroup as 'Vehicle Group'`)
    } if(this.exportBookings.totalPrice){
      this.columns.push(`bo.totalPrice as 'Total Price'`)
    } if(this.exportBookings.extraHours){
      this.columns.push(`d.extraHours as 'Extra Hours'`)
    } if(this.exportBookings.extraKms){
      this.columns.push(`d.extraKms as 'Extra Kms'`)
    } if(this.exportBookings.startKm){
      this.columns.push(`c.startKm as 'Start Km'`)
    } if(this.exportBookings.endKm){
      this.columns.push(`c.endKm as 'End Km'`)
    } if(this.exportBookings.nonTaxableAmount){
      this.columns.push(`sum(i.nonTaxableAmount) as 'Non Taxable Amount'`)
    } if(this.exportBookings.taxableAmount){
      this.columns.push(`sum(i.taxableAmount) as 'Taxable Amount'`)
    } if(this.exportBookings.extraCharges){
      this.columns.push(`e.name as 'Extra Charges Name'`)
    } if(this.exportBookings.extraChargesAmount){
      this.columns.push(`e.charges as 'Extra Charges'`)
    } if(this.exportBookings.extraChargesTotal){
      this.columns.push(`sum(b.extraChargesTotal) as 'Extra Charges Total'`)
    } if(this.exportBookings.driverNumber){
      this.columns.push(`dr.mobileNumber as 'Driver Number'`)
    } if(this.exportBookings.invoiceTotal){
      this.columns.push(`sum(i.totalAmount) as 'Invoice Total'`)
    } if(this.exportBookings.dutyCreatedAt){
      this.columns.push(`l.message as 'Duty Created At'`)
    } 
    console.log(this.columns);
  }

}

export interface ExportDuties {
  id?: string;
  name?: string;
  bookingId?: boolean
  dutyId?: boolean;
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
  startKm?:boolean;
  endKm?:boolean;
  taxableAmount?:boolean;
  nonTaxableAmount?:boolean;
  extraChargesTotal?:boolean;
  extraCharges?:boolean;
  extraChargesAmount?:boolean;
  driverNumber?:boolean;
  invoiceTotal?:boolean;
  dutyCreatedAt?:boolean;
}



   




       

   


     



     




   





   

 















