import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../../core/user';
import { flightExport, ExportbookingsComponent } from '../exportbookings/exportbookings.component';
import { AuthService } from '../../../core/auth.service';
import { MatDialogRef } from '@angular/material';
import { Http,Headers } from '@angular/http';
import { CustomerService } from '../../masters/customer/customer.service';
import { EmployeeService } from '../../masters/new-employees/employee.service';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'exportvisa',
  templateUrl: './exportvisa.component.html',
  styleUrls: ['./exportvisa.component.scss']
})
export class ExportvisaComponent implements OnInit {


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
  
  constructor(
    private auth:AuthService,
    private dialogRef:MatDialogRef<ExportbookingsComponent>,
    private http:Http,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0];
      this.getVisaBookingsProfiles(this.user).subscribe(data=>{
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
  predefinedRoles() {

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
  change(event,temp) {

  }
  closeDialog() {
    
  }
  savePreset() {

  }
  getVisaBookings() {

  }
  getVisaBookingsProfiles(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/getFlightBookingExportsProfiles',temp,{headers:headers}).map(res=>res.json());  
    
  }

}
