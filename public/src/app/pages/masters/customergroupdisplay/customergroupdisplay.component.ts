import { Component, OnInit } from '@angular/core';
import { NewcustomergroupComponent, CustomerGroup } from '../newcustomergroup/newcustomergroup.component';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';

@Component({
  selector: 'customergroupdisplay',
  templateUrl: './customergroupdisplay.component.html',
  styleUrls: ['./customergroupdisplay.component.scss']
})
export class CustomergroupdisplayComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={};
  permission:SubUser={}
  displayedColumns=['name','Options'];
  dataSource=new MatTableDataSource<CustomerGroup>();
  constructor(private customerGroupService:NewcustomergroupComponent,private auth:AuthService,private dialog:MatDialog,private permissionService:SubUserService) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.manageCustomerGroup === 0) {
          this.displayedColumns.pop();
        }
        if(data[0].viewCustomerGroup==1){
          this.customerGroupService.getCustomerGroups(this.user).subscribe(data=>{
          this.dataSource.data=data
          this.length= data.length
        })
        }
        else{
          window.alert("You do not have permission to view customer group")
        }
      })
      
    })
  }
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  addCustomerGroup(){
    this.dialog.open(NewcustomergroupComponent,{autoFocus:false,disableClose:true})
  }
  editCustomerGroup(temp){
    this.dialog.open(NewcustomergroupComponent,{data:temp,autoFocus:false,disableClose:true})
  }
  deleteCustomerGroup(temp){
    this.customerGroupService.deleteCustomerGroups(temp).subscribe()
  }

}
