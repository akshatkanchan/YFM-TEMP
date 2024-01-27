import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { NewBillingComponent } from '../new-billing/new-billing.component';
import { BillingService } from '../new-billing/billing.service';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { Billing } from '../new-billing/billing';
import { SubUser } from '../../masters/sub-users/sub-user';
import { SubUserService } from '../../masters/sub-users/sub-user.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';

@Component({
  selector: 'billingitemdisplay',
  templateUrl: './billingitemdisplay.component.html',
  styleUrls: ['./billingitemdisplay.component.scss']
})
export class BillingitemdisplayComponent implements OnInit {

  length;
  pageSize=5;
  pageSizeOptions = [10, 15, 25, 40];
  displayedColumns=['name','shortName','taxable','allowDriverToAdd', 'Options'];
  dataSource=new MatTableDataSource<Billing>();
  permission:SubUser={};
  searchTerm;
  user:User={};
  ws:WebSocket;
  tempArray:any[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(
    private dialog:MatDialog,
    private billingService:BillingService,
    private auth:AuthService,
    private router:Router,
    private permissionService:SubUserService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'employeedisp')
      this.billingService.getBilling(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(data[0].viewBillingItems==1){
          this.billingService.getBilling(this.user).subscribe(data=>{
            this.tempArray=data;
            this.dataSource.data=this.tempArray;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          })
        }
        else{
          window.alert("You do not have permission to view billing items")
        }
      })
    })
  }
  search(filterValue:string)
  {
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  addBillingItems(){
    this.dialog.open(NewBillingComponent,{autoFocus:false,disableClose:true})
  }
  clear(){
    this.searchTerm='',
    this.dataSource.filter='';
  }
  selectRow(row) {
    this.dialog.open(NewBillingComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data==undefined){
      }
      else{
        if(data.inserted=='yes'){
          this.tempArray.push(data.data);
          this.dataSource.data = this.tempArray;
        } 
      }
    });;
  }
  deleteRow(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=> {  
      if(data=='no'){}
      if(data=='yes') {
        this.billingService.deleteBilling(row).subscribe(data => {
          if(data.errno==undefined) {
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;          
          }
          else {
            if(data.errno==1451) {
              window.alert("Cannot delete because you have corresponding Data");
            }
            else {
              window.alert("Error Cannot Delete Booking");
            }
          }
        },errr=>{},()=>{
        this.snackBar.open("Billing Items Deleted","X",{duration: 3000})
      });
      }      
    })
    
  }

}
