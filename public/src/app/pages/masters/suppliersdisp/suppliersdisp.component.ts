import { Component, OnInit,ViewChild } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { SupplierService } from '../addsuppliers/supplier.service';
import { AddSuppliersComponent } from '../addsuppliers/addsuppliers.component';
import { Supplier } from '../addsuppliers/supplier';
import { NewsuppliergroupComponent } from '../newsuppliergroup/newsuppliergroup.component';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { Router } from '@angular/router';
import { SubUser } from '../sub-users/sub-user';

@Component({
  selector: 'app-suppliersdisp',
  templateUrl: './suppliersdisp.component.html',
  styleUrls: ['./suppliersdisp.component.scss']
})
export class SuppliersdispComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  searchTerm;
  dataSource=new MatTableDataSource<Supplier>();
  users:User={}
  tempArray:any[];
 displayedColumns = ['name','phone','email','state','type','Options'];//,'Passenger','vgroup','dutyt','status'];

 supplierObs: Observable<Supplier[]>;
 permission:SubUser={};
 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator:MatPaginator;
 constructor(private SupplierService:SupplierService,
  public dialog:MatDialog,
  private auth:AuthService,
  private snackBar:MatSnackBar,
  private router:Router
  ) { }
  selectRow(row) {

    localStorage.setItem('supplier',JSON.stringify(row));
    this.router.navigateByUrl('/pages/masters/addsupplier');

    // this.dialog.open(AddSuppliersComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{

    //   if(data==undefined){
    //   }
    //   else{
    //     if(data.inserted=='yes'){
    //       this.tempArray.push(data.data);
    //       this.dataSource.data=this.tempArray
    //      } 
    //   }
       
    // });
  }
  viewSupplierGroup(){
    this.router.navigateByUrl('/pages/masters/suppliergroupdisplay')
  }
  ngOnInit() {
      this.auth.user.subscribe(data=>{
        this.users=data[0]
        this.auth.permissions.subscribe(data => {
          this.permission=data[0]
        })
        this.SupplierService.getSupplier(this.users).subscribe(data=>{
          this.tempArray=data;
          this.dataSource.data=this.tempArray;
      })
      })
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
  }
  newSupplierGroup(){
    this.dialog.open(NewsuppliergroupComponent,{autoFocus:false,disableClose:true});
  }
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter='';
  }
  
  deleteSupplier(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.SupplierService.deleteSupplier(row).subscribe(data=>{
          if(data.errno==undefined){
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;
            this.snackBar.open("Supplier has been Deleted","X",{duration:3000});
          }
        })

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
}