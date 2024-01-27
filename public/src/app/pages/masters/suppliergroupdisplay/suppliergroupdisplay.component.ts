import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { NewsuppliergroupComponent, SupplierGroup } from '../newsuppliergroup/newsuppliergroup.component';
import { User } from '../../../core/user';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';

@Component({
  selector: 'suppliergroupdisplay',
  templateUrl: './suppliergroupdisplay.component.html',
  styleUrls: ['./suppliergroupdisplay.component.scss']
})
export class SuppliergroupdisplayComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  user:User={}
  dataSource=new MatTableDataSource<SupplierGroup>();
  displayedColumns=['name','Options'];
  searchTerm;
  permission:SubUser={};
  constructor(private auth:AuthService,private supplierGroupService:NewsuppliergroupComponent,private dialog:MatDialog,private permissionService:SubUserService) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        
        if(this.permission.manageSupplierGroup === 0) {
          this.displayedColumns.pop();
        }
        if(data[0].viewSupplierGroup==1){
          this.supplierGroupService.getSupplierGroups(this.user).subscribe(data=>{
            this.dataSource.data=data
          })
        }
        else{
          window.alert("You do not have permission to view Supplier Group")
        }
      })
      
    })
  }
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
  }
  addSupplierGroup(){
    this.dialog.open(NewsuppliergroupComponent,{autoFocus:false,disableClose:true})
  }
  editSupplierGroup(){
    
  }
  deleteSupplierGroup(){
    
  }

}
