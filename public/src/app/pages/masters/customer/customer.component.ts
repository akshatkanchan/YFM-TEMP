import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DataSource } from'@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import{Observable, Subject} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatPaginator, PageEvent, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';


import{BehaviorSubject} from 'rxjs/BehaviorSubject';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialog} from '@angular/material';
import { CustomerService } from './customer.service';
import { AddCustomerComponent } from '../addcustomer/addcustomer.component';
import { Customer } from '../customer';
import { NewcustomergroupComponent } from '../newcustomergroup/newcustomergroup.component';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { CustomergroupdisplayComponent } from '../customergroupdisplay/customergroupdisplay.component';
import { Router } from '@angular/router';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';
import { ImportcustomerComponent } from '../importcustomer/importcustomer.component';



@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./customer.component.scss'],
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  customers: Observable<Customer[]>;
  searchTerm;
  // dutytype: dutyType[];
  dataSource=new MatTableDataSource<Customer>();
  // editState: boolean = false;
  // dutyTypeToEdit: dutyType;
  displayedColumns = ['name','phone','email','state','contractSDate','custGroup','Options'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  expenses: any;
  editState: boolean;
  custName:any[]=[];
  startAt=new Subject();
  endAt=new Subject();
  user:User={};
  permission:SubUser={};
  tempArray:any[];
  ws:WebSocket;

  constructor(
    private customerService:CustomerService,
    public dialog:MatDialog,
    private auth:AuthService,
    private snackBar:MatSnackBar,
    private router:Router,
    private permissionService:SubUserService
  ) { }
 viewRecurringBookedBy(){
   this.router.navigateByUrl('/pages/masters/recurringbookby')
 }
 viewRecurringPassengers(){
   this.router.navigateByUrl('/pages/masters/recurringpassenger')
 }
 customerGroupDisplay(){
   this.router.navigateByUrl('/pages/masters/customergroupdisplay')
 }
  addCustomer() {
    this.dialog.open(AddCustomerComponent,{data:null,autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{
      if(data==undefined){

      }
      else{
        if(data.inserted=='yes'){
          this.tempArray.push(data.data);
          this.dataSource.data=this.tempArray
          // this.ws.send(this.user.ownerId+'customer')
        }
      }
    });
  }
  selectRow(row){
    console.log("yes");
    
    localStorage.setItem('customer',JSON.stringify(row));
    this.router.navigateByUrl('/pages/masters/addcustomer');
    // this.dialog.open(AddCustomerComponent,{data:{row,edit:'editCustomer'},autoFocus:false,disableClose:true});
  }
  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'customer')
      this.customerService.getCustomers(this.user).subscribe(data=>{
        this.tempArray=data;
        this.datasource.data=this.tempArray;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.manageCustomer === 0) {
          this.displayedColumns.pop();
        }
        if(data[0].viewCustomer==1){
          this.customerService.getCustomers(this.user).subscribe(data=>{
            this.tempArray=data;
            this.dataSource.data=this.tempArray;
          })
        }
        else{
          window.alert("You do not have permission to view Customers")
        }
      })
    })
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  ngOnDestroy()
  {
    this.ws.close();
  }

search(filterValue:string){
  this.dataSource.filter=filterValue.trim().toLowerCase();
}
clear(){
  this.searchTerm='';
  this.dataSource.filter='';
}
deleteCust(row){
  this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
    if(data=='no'){}
    if(data=='yes'){
      this.customerService.deleteCustomer(row).subscribe(data=>{
        if(data.errno==undefined){
          var i=this.tempArray.indexOf(row);
          this.tempArray.splice(i,1);
          this.dataSource.data=this.tempArray;
          this.snackBar.open("Customer Deleted","X",{duration:3000});
          // this.ws.send(this.user.ownerId+'customer');
        }
      });

    }
    else{
      if(data.errno==1451)
        {
          window.alert("Cannot delete because you have corresponding Data");
        }
        else
        {
          window.alert("Error Cannot Delete Booking");
        }
    }
  })
}

deactivateCustomer(row) {
  this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
    if(data=='no'){}
    if(data=='yes'){
      this.customerService.deactivateCustomer(row).subscribe(data=>{
        if(data.errno==undefined)
        {                        
          this.ws.send(this.user.ownerId+'customer');
          // var i=this.tempArray.indexOf(row);
          // this.tempArray.splice(i,1);
          // this.datasource.data=this.tempArray;
          this.snackBar.open("Customer Deactivated","X",{duration:3000});
        }         
      });
    }      
  })
}

activateCustomer(row) {
  this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
    if(data=='no'){}
    if(data=='yes'){
      this.customerService.deactivateCustomer(row).subscribe(data=>{
        if(data.errno==undefined)
        {            
          this.ws.send(this.user.ownerId+'customer');
          // var i=this.tempArray.indexOf(row);
          // this.tempArray.splice(i,1);
          // this.datasource.data=this.tempArray;
          this.snackBar.open("Customer Activated","X",{duration:3000});
          this.ws.send(this.user.ownerId+'customer');
        }         
      });
    }      
  })
}

importCustomers()
{
  this.dialog.open(ImportcustomerComponent,{autoFocus:false,disableClose:true});
}

}