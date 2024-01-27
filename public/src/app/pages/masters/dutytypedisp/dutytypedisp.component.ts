import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { DutyTypeService } from '../dutytype/duty-type.service';
import { DutyTypeComponent } from '../dutytype/dutytype.component';
import { DutyType } from '../dutytype/duty-type';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUser } from '../sub-users/sub-user';


@Component({
  selector: 'app-dutytypedisp',
  templateUrl: './dutytypedisp.component.html',
  styleUrls: ['./dutytypedisp.component.scss']
})

export class DutytypedispComponent implements OnInit,OnDestroy {
 
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource<DutyType>();
  dutyTypeObs:Observable<DutyType[]>;
  searchTerm:string;
  user:User={}
  tempArray:any[];
  displayedColumns = ['name','dType', 'maxHrs','totalKms','Options'];
  ws:WebSocket;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  permission:SubUser={};
 
 constructor(private dutytypeService:DutyTypeService,
  public dialog:MatDialog,
  private auth:AuthService,
  private snackBar:MatSnackBar

  ) { }
  selectRow(row) {
    this.dialog.open(DutyTypeComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data==undefined){

      }
      else{
        if(data.inserted=='yes'){
          this.tempArray.push(data.data)
          this.dataSource.data=this.tempArray
        }
      }
    });
   
  }
  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
     this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'dutytype')
      this.dutytypeService.getDutyType(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission = data[0]
        console.log(this.permission)
        if(this.permission.manageDutyType === 0) {
          this.displayedColumns.pop()
        }
      })    
      this.dutytypeService.getDutyType(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
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
    this.dataSource.filter=""
  }
  deleteDutyType(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.dutytypeService.deleteDutyType(row).subscribe(data=>{
          if(data.errno==undefined){
            var i=this.tempArray.indexOf(row);
            this.tempArray.splice(i,1);
            this.dataSource.data=this.tempArray;
            this.snackBar.open("Duty Type Deleted","X",{duration:3000});
          }
        });
        
      }
      else{
        if(data.errno==1451){
          window.alert("Cannot delete because you have corresponding data");
        }
        else{
          window.alert("Error Cannot be Deleted")
        }
      }
    })
   
  }
}  
