import { Component, OnInit, ViewChild } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { NewPettyCashComponent,PettyCash} from '../newpettycash/newpettycash.component';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';


@Component({
  selector: 'app-pettycashdisp',
  templateUrl: './pettycashdisp.component.html',
  styleUrls: ['./pettycashdisp.component.scss']
})
export class PettycashdispComponent implements OnInit {

  length;
  pageSize = 10;  
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource<PettyCash>();
  searchTerm;
 displayedColumns = ['driver', 'date','amount','supplier','transactionType','voucherNumber','Options'];//,'Passenger','vgroup','dutyt','status'];
 pettycash: Observable<PettyCash[]>;
 tempArray:any[];
 permission:SubUser={}
 user:User={}
 @ViewChild(MatPaginator) paginator:MatPaginator;
 @ViewChild(MatSort) sort: MatSort;
 constructor(private pettycashService:NewPettyCashComponent,
  public dialog:MatDialog,
  private snackBar:MatSnackBar,
  private auth:AuthService,
  private permissionService:SubUserService) { }
  selectRow(row) {
  
    this.dialog.open(NewPettyCashComponent,{data:{row},autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{

      if(data==undefined){
      }
      else{
        if(data.inserted=='yes'){
          this.tempArray.push(data.data);
          this.dataSource.data=this.tempArray
         } 
      }
       
    });;
  }
  newPettyCash(){
    this.dialog.open(NewPettyCashComponent,{autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>{

      if(data==undefined){
      }
      else{
        if(data.inserted=='yes'){
          this.tempArray.push(data.data);
          this.dataSource.data=this.tempArray
         } 
      }
       
    });;
  }
  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(data[0].viewPettyCash==1){
          this.pettycashService.getPettyCash(this.user).subscribe(data=>{
          this.tempArray=data
          this.dataSource.data=this.tempArray;
        })
        }
        else{
          window.alert("You do not have permission to view Petty Cash")
        }
        
      })
      
    })
    
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
      
  }
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter='';
  }
  deletePettyCash(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
      this.pettycashService.deletePettyCash(row).subscribe(data=>{
        if(data.errno==undefined)
        {
          var i=this.tempArray.indexOf(row);
          this.tempArray.splice(i,1);
          this.dataSource.data=this.tempArray;
          this.snackBar.open("Petty Cash Deleted","X",{duration:3000});
        }
        else
        {
          if(data.errno==1451)
          {
            window.alert("Cannot delete because you have corresponding Data");
          }
          else
          {
            window.alert("Error Cannot Delete Booking");
          }
        }
      
       
      }
      );
      }
      
    })
  }
}
