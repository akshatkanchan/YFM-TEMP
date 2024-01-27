import { Component, OnInit,ViewChild } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatSort, MatTableDataSource} from '@angular/material';
import {MatDialogRef} from'@angular/material/dialog';
import {CustomerService } from '../customer/customer.service';
import { Customer } from '../customer';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { EmployeeService } from '../new-employees/employee.service';

@Component({
  selector: 'app-customerselection',
  templateUrl: './customerselection.component.html',
  styleUrls: ['./customerselection.component.scss']
})

export class CustomerselectionComponent implements OnInit {

  customers:any[];
  displayedColumns = ['name','phone'];
  //customerDatabase= new CustomerDatabase(this.customerService);
  customer: Observable<Customer[]>;
  @ViewChild(MatSort) sort: MatSort;
  dataSource=new MatTableDataSource<Customer>();
  user:User={};
  constructor(
    public dialog:MatDialogRef<CustomerselectionComponent>,
    private customerService:CustomerService,
    private auth:AuthService,
    private employeeService: EmployeeService,
  ) { }

  selectRow(row){
   
    //this.dialog.open(AddCustomerComponent,{autoFocus:false,disableClose:true,data:{row}});
    this.dialog.close(row);
  }

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
              this.dataSource.data=data
              console.log(data)
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
      
    })
   
    ;

      //this.dataSource=new CustomerDataSource(this.customerDatabase,this.sort);
  }

  getCustomer() {
    this.customerService.getCustomers(this.user).subscribe(customers=>{      
      this.customers=customers;
      this.dataSource.data=customers
      console.log(customers)
    })
  }

}