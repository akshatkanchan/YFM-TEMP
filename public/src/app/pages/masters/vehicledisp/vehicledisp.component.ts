import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { NewVehiclesComponent } from '../new-vehicles/new-vehicles.component';
import { Vehicle } from '../new-vehicles/vehicle';
import { Observable } from 'rxjs/Observable';
import { VehicleService } from '../new-vehicles/vehicle.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';
import { VehicleprofileComponent } from '../vehicleprofile/vehicleprofile.component';

@Component({
  selector: 'app-vehicledisp',
  templateUrl: './vehicledisp.component.html',
  styleUrls: ['./vehicledisp.component.scss']
})
export class VehicledispComponent implements OnInit {
  searchTerm;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  datasource=new MatTableDataSource<Vehicle>();
  vehicleObs:Observable<Vehicle[]>;
  tempArray:any[];
  permission:SubUser={};
  user:User={}
  ws:WebSocket;

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  displayedColumns=['modelname','number','seating','assignedDriver','vcolor','status','Options'];  

  constructor(
    private dialog:MatDialog,
    private vehicleService:VehicleService,
    private snackBar:MatSnackBar,
    private auth:AuthService,
    private permissionService:SubUserService,
  ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'vehicledisp')
      this.vehicleService.getVehicle(this.user).subscribe(data=>{
        this.tempArray=data;
        this.datasource.data=this.tempArray;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.manageVehicles === 0) {
          this.displayedColumns.pop();
        }
        if(data[0].viewVehicles==1){
          this.vehicleService.getVehicle(this.user).subscribe(data=>{
            this.tempArray=data;
            this.datasource.data=this.tempArray;
          })
        }
        else{
          window.alert("You not have permission to view vehicles")
        }
        
      })
    
    })
    this.datasource.sort=this.sort;
    this.datasource.paginator=this.paginator;

  }

  ngOnDestroy() {
    this.ws.close();
  }

  selectRow(row){
    this.dialog.open(NewVehiclesComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
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
  search(filterValue:string){
    this.datasource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.datasource.filter='';
  }
  deleteVehicle(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
      this.vehicleService.deleteVehicle(row).subscribe(data=>{
        if(data.errno==undefined)
        {
          var i=this.tempArray.indexOf(row);
          this.tempArray.splice(i,1);
          this.datasource.data=this.tempArray;
          this.snackBar.open("Vehicle Deleted","X",{duration:3000});
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

  deactivateVehicle(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.vehicleService.deactivateVehicle(row).subscribe(data=>{
          if(data.errno==undefined)
          {                        
            this.ws.send(this.user.ownerId+"vehicledisp");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("Vehicle Deactivated","X",{duration:3000});
          }         
        });
      }      
    })
  }

  activateVehicle(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.vehicleService.deactivateVehicle(row).subscribe(data=>{
          if(data.errno==undefined)
          {            
            this.ws.send(this.user.ownerId+"vehicledisp");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("Vehicle Activated","X",{duration:3000});
          }         
        });
      }      
    })
  }

  openProfile(row) {
    this.dialog.open(VehicleprofileComponent,{autoFocus:false,disableClose:true,data:{row}})
  }
}
