import { Component, OnInit,ViewChild, ChangeDetectorRef } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatDialog, MatPaginator, MatSnackBar} from '@angular/material';

import { VehicleGroupsComponent, VehicleGroup } from '../vehiclegroups/vehiclegroups.component';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';



@Component({
  selector: 'app-vehiclegroupdisp',
  templateUrl: './vehiclegroupdisp.component.html',
  styleUrls: ['./vehiclegroupdisp.component.scss']
})
export class VehiclegroupdispComponent implements OnInit {
  searchTerm;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  datasource= new  MatTableDataSource<VehicleGroup>();
  user:User={}
  displayedColumns = ['name', 'number','Options'];
  vehiclegroup: Observable<VehicleGroup[]>;
  permission:SubUser={}
  tempArray:any[];
  ws:WebSocket;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
 
  constructor(private vehicleGroupService:VehicleGroupsComponent,
    public dialog:MatDialog,
    private auth:AuthService,
    private snackBar:MatSnackBar,
    private permissionService:SubUserService
    ) { }
  selectRow(row) {
    this.dialog.open(VehicleGroupsComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data==undefined){
      }
      else{
        if(data.inserted=='yes'){
          this.tempArray.push(data.data);
          this.datasource.data=this.tempArray
         } 
      }
    });
  }
  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'customer')
      this.vehicleGroupService.getvehicleGroup(this.user).subscribe(data=>{
        this.tempArray=data;
        this.datasource.data=this.tempArray;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.manageVehicleGroup === 0) {
          this.displayedColumns.pop()
        }
        if(data[0].viewVehicleGroup==1){
          this.vehicleGroupService.getvehicleGroup(this.user).subscribe(data=>{
            this.tempArray=data;
          this.datasource.data=this.tempArray;
        })
        }
        else{
          window.alert("You not have permission to view vehicleGroup")
        }
      })
      
    })
    this.datasource.sort=this.sort;
    this.datasource.paginator=this.paginator;
  }
  search(filterValue:string)
  {
    this.datasource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.datasource.filter='';
  }
  deleteVehicleGroup(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
      this.vehicleGroupService.deletevehicleGroup(row).subscribe(data=>{
        if(data.errno==undefined)
        {
          var i=this.tempArray.indexOf(row);
          this.tempArray.splice(i,1);
          this.datasource.data=this.tempArray;
          this.snackBar.open("Vehicle Group Deleted","X",{duration:3000});
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



