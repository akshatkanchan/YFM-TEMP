import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../../core/user';
import { Http,Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { CustomerService } from '../../masters/customer/customer.service';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { startWith, map } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Component({
  selector: 'exporthotels',
  templateUrl: './exporthotels.component.html',
  styleUrls: ['./exporthotels.component.scss']
})
export class ExporthotelsComponent implements OnInit {

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
  exportBookings:exportHotels={};
  hotelData:any;
  constructor(
    private auth:AuthService,
    private dialogRef:MatDialogRef<ExporthotelsComponent>,
    private http:Http,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0];
      this.exportBookings.ownerId=this.user.ownerId;
      this.getHotelProfiles(this.user).subscribe(data=>{
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
      } else {
        this.getCustomer();
      }
    })
    this.preset=this.fb.group({
      permissionName:['']
    })
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
  
  getHotelBookings() {
    var temp={
      columns:this.columns
    }
    this.getBookingsForExports(temp).subscribe(data=>{
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
  predefinedRoles(temp) {
    this.columns=[];
    this.exportBookings=temp;
    if(this.exportBookings.customerName){
      this.columns.push(`h.customerName as 'Customer Name'`)
    } if(this.exportBookings.checkInDate){
      this.columns.push(`h.checkInDate as 'Check In Date'`)
    } if(this.exportBookings.checkOutDate){
      this.columns.push(`h.checkOutDate as 'Check Out Date'`)
    } if(this.exportBookings.bookBy){
      this.columns.push(`h.bookByName as 'Booked By'`)
    } if(this.exportBookings.bookByNo){
      this.columns.push(`h.bookByNo as 'Booked By No'`)
    } if(this.exportBookings.bookByEmail){
      this.columns.push(`h.bookByEmail as 'Booked By Email'`)
    } if(this.exportBookings.guestName){
      this.columns.push(`h.guestName as 'Guest Name'`)
    } if(this.exportBookings.hotelName){
      this.columns.push(`h.hotelName as 'Hotel Name'`)
    } if(this.exportBookings.billedToNo){
      this.columns.push(`h.billedToNo as 'Billed To Number'`)
    } if(this.exportBookings.billedToEmail){
      this.columns.push(`h.billedToEmail as 'Billed To Email'`)
    } if(this.exportBookings.occupancy){
      this.columns.push(`h.occupancy as 'Occupancy'`)
    } if(this.exportBookings.checkInTime){
      this.columns.push(`h.checkInTime as 'Check In Time'`)
    } if(this.exportBookings.checkOutTime){
      this.columns.push(`h.checkOutTime as 'checkOutTime'`)
    } if(this.exportBookings.nights){
      this.columns.push(`h.nights as 'Nights'`)
    } if(this.exportBookings.noOfPeople){
      this.columns.push(`h.noOfPeople as 'Number of People'`)
    } if(this.exportBookings.confNo){
      this.columns.push(`h.confNo as 'Conf Number'`)
    } if(this.exportBookings.inclusion){
      this.columns.push(`h.inclusion as 'Inclusion'`)
    } if(this.exportBookings.rate){
      this.columns.push(`h.rate as 'Rate'`)
    } if(this.exportBookings.amount){
      this.columns.push(`h.amount as 'Amount'`)
    }if(this.exportBookings.paymentMode){
      this.columns.push(`h.paymentMode as 'Payment Mode'`)
    }if(this.exportBookings.taxes){
      this.columns.push(`h.taxes as 'Taxes'`)
    }if(this.exportBookings.hotelBillNo){
      this.columns.push(`h.hotelBillNo as 'Hotel Bill Number'`)
    }if(this.exportBookings.hotelAmount){
      this.columns.push(`h.hotelAmount as 'Hotel Amount'`)
    }if(this.exportBookings.total){
      this.columns.push(`h.total as 'Total'`)
    }if(this.exportBookings.intInclusion){
      this.columns.push(`h.intInclusion as 'Int Inclusion'`)
    }if(this.exportBookings.hotelRate){
      this.columns.push(`h.hotelRate as 'Hotel Rate'`)
    }if(this.exportBookings.intAmount){
      this.columns.push(`h.intAmount as 'Int Amount'`)
    }if(this.exportBookings.agents){
      this.columns.push(`h.agents as 'Agents'`)
    }if(this.exportBookings.commission){
      this.columns.push(`h.commission as 'Commission'`)
    }if(this.exportBookings.intTaxes){
      this.columns.push(`h.intTaxes as 'Int Taxes'`)
    }if(this.exportBookings.intTotal){
      this.columns.push(`h.intTotal as 'Int Total'`)
    }if(this.exportBookings.hotelCity){
      this.columns.push(`h.hotelCity as 'Hotel City'`)
    }if(this.exportBookings.status){
      this.columns.push(`h.status as 'Status'`)
    }if(this.exportBookings.message){
      this.columns.push(`l.message as 'Message'`)
    }if(this.exportBookings.invoiceNumber){
      this.columns.push(`i.invoiceNumber as 'Invoice Number'`)
    }if(this.exportBookings.invoiceDate){
      this.columns.push(`i.invoiceDate as 'Invoice Date'`)
    }if(this.exportBookings.invoicePeriodFrom){
      this.columns.push(`i.invoicePeriodFrom as 'Invoice Period'`)
    }if(this.exportBookings.invoicePeriodTo){
      this.columns.push(`i.invoicePeriodTo as 'Invoice Period To'`)
    }if(this.exportBookings.poNumber){
      this.columns.push(`i.poNumber as 'PO Number'`)
    }if(this.exportBookings.ccNumber){
      this.columns.push(`i.ccNumber as 'CC Number'`)
    }if(this.exportBookings.totalAmount){
      this.columns.push(`i.totalAmount as 'totalAmount'`)
    }if(this.exportBookings.taxType){
      this.columns.push(`i.taxType as 'Tax Type'`)
    }if(this.exportBookings.taxRate){
      this.columns.push(`i.taxRate as 'Tax Rate'`)
    }if(this.exportBookings.taxAmount){
      this.columns.push(`i.taxAmount as 'Tax Amount'`)
    }if(this.exportBookings.discountType){
      this.columns.push(`i.discountType as 'Discount Type'`)
    }if(this.exportBookings.discountAmount){
      this.columns.push(`i.discountAmount as 'Discount Amount'`);
    }if(this.exportBookings.advancedReceived){
      this.columns.push(`i.advanceReceived as 'Advanced Received'`);
    }if(this.exportBookings.room){
      this.columns.push(`h.room as 'Room'`);
    }if(this.exportBookings.guestNumber){
      this.columns.push(`h.guestMobile as 'Guest Name'`);
    }if(this.exportBookings.guestEmail){
      this.columns.push(`h.guestEmail as 'Guest Email'`);
    }
    console.log(this.columns)
    
  }
  savePreset() {
    this.exportBookings.name=this.preset.get('permissionName').value;
    this.addHotelprofiles(this.exportBookings).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Preset Saved", "X", {duration: 3000});
    }); 
  }
  getHotelProfiles(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/getHotelBookingExportsProfiles',temp,{headers:headers}).map(res=>res.json());
  }
  addHotelprofiles(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/addHotelBookingExportsProfiles',temp,{headers:headers}).map(res=>res.json());
  }
  getBookingsForExports(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/hotel/getHotelBookingForExports',temp,{headers:headers}).map(res=>res.json());
  }
  exportDuties() {
    console.log(this.exportBookings);
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(this.hotelData);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
    XLSX.writeFile(workBook,"_Duties.xlsx")
    
  }
  

}
export interface exportHotels {
  name?:boolean;
  customerName?:boolean
  checkInDate?:boolean 
  checkOutDate?:boolean
  bookBy?:boolean
  bookByNo?:boolean 
  bookByEmail?:boolean 
  guestName?:boolean
  hotelName?:boolean
  billedToNo?:boolean
  billedToEmail?:boolean
  room?:boolean
  occupancy?:boolean
  guestNumber?:boolean 
  guestEmail?:boolean
  checkInTime?:boolean 
  checkOutTime?:boolean
  nights?:boolean
  noOfPeople?:boolean
  confNo?:boolean
  inclusion?:boolean
  rate?:boolean
  amount?:boolean
  paymentMode?:boolean 
  taxes?:boolean
  hotelBillNo?:boolean 
  hotelAmount?:boolean 
  total?:boolean
  intInclusion?:boolean
  hotelRate?:boolean
  intAmount?:boolean
  agents?:boolean
  commission?:boolean
  intTaxes?:boolean 
  intTotal?:boolean 
  hotelCity?:boolean
  status?:boolean
  message?:boolean
  invoiceNumber?:boolean
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
  ownerId?:string;
}
