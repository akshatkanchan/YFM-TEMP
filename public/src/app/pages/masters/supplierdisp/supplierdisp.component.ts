import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../addsuppliers/supplier.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { Supplier } from '../addsuppliers/supplier';
import { CircleService } from '../../circles/circle.service';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'supplierdisp',
  templateUrl: './supplierdisp.component.html',
  styleUrls: ['./supplierdisp.component.scss']
})
export class SupplierdispComponent implements OnInit {

  permission:SubUser={}
  user:User={}
  dataSource=new MatTableDataSource<Supplier>();
  displayedColumns=['name'];
  constructor (
    private auth:AuthService,
    private circleService:CircleService,
    private customerService: CustomerService,
    public dialog:MatDialogRef<SupplierdispComponent>,
    private permissionService:SubUserService
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(data[0].viewSuppliers==1){
          this.customerService.getB2BCustomers(this.user).subscribe(data => {
            this.dataSource.data = data;
          })
          // this.circleService.getClients(this.user).subscribe(data=>{
          //   this.dataSource.data=data;
          // })
        }
        else{
          window.alert("You do not have permission to view suppliers")
        }
      })
      
    })
  }
  selectRow(row){
    this.dialog.close(row);
  }

}
