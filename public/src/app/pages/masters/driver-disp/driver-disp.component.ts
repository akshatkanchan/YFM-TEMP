import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { NewDriverComponent } from '../new-driver/new-driver.component';
import { Driver } from '../new-driver/driver';
import { Observable } from 'rxjs/Observable';
import {DriverService} from '../new-driver/driver.service'
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { SubUser } from '../sub-users/sub-user';
import { SubUserService } from '../sub-users/sub-user.service';
import { ImportdriverComponent } from '../importdriver/importdriver.component';
import { NewuserComponent } from '../newuser/newuser.component';
import { DriverprofileComponent } from '../driverprofile/driverprofile.component';

@Component({
  selector: 'app-driver-disp',
  templateUrl: './driver-disp.component.html',
  styleUrls: ['./driver-disp.component.scss']
})
export class DriverDispComponent implements OnInit {
  searchTerm;
  length;
  pageSize = 10; 
  pageSizeOptions = [10, 15, 25, 40];
  displayedColumns=['name','mobileNumber','userName','status','Options'];
  permission:SubUser={};
  datasource=new MatTableDataSource<Driver>();
  Drivers:Observable<Driver[]>;
  user:User={}
  tempArray:any[];
  status: string;
  ws:WebSocket;

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  constructor(private dialog:MatDialog,
    private driverService:DriverService,
    private auth:AuthService,
    private snackBar:MatSnackBar,
    private permissionService:SubUserService
    ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'driver-disp')
      this.driverService.getDriver(this.user).subscribe(data=>{
        this.tempArray=data;
        this.datasource.data=this.tempArray;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        // if(this.permission.manageDrivers === 0) {
        //   this.displayedColumns.pop();
        // }
        if(data[0].viewDriver==1){
          this.driverService.getDriver(this.user).subscribe(data=>{
            this.tempArray=data
            this.datasource.data=this.tempArray;
          })
        }
        else{
          window.alert("You do not have permission to view drivers")
        }
        
      })
      
    })
    
    this.datasource.sort=this.sort;
    this.datasource.paginator=this.paginator;
  
  }
  ngOnDestroy()
  {
    this.ws.close();
  }
  selectRow(row){
    this.dialog.open(NewDriverComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
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
  createUser(row) {
    this.dialog.open(NewuserComponent,{data:{
      data:row,
      'driver':'true'
    }});
  }
  search(filterValue:string)
  {
    this.datasource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.datasource.filter='';
  }
  deleteDriver(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
      this.driverService.deleteDriver(row).subscribe(data=>{
        if(data.errno==undefined)
        {
          var i=this.tempArray.indexOf(row);
          this.tempArray.splice(i,1);
          this.datasource.data=this.tempArray;
          this.snackBar.open("Driver Deleted","X",{duration:3000});
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

  deactivateDriver(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.driverService.deactivateDriver(row).subscribe(data=>{
          if(data.errno==undefined)
          {                        
            this.ws.send(this.user.ownerId+"driver-disp");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("Driver Deactivated","X",{duration:3000});
          }         
        });
      }      
    })
  }

  activateDriver(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.driverService.deactivateDriver(row).subscribe(data=>{
          if(data.errno==undefined)
          {            
            this.ws.send(this.user.ownerId+"driver-disp");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("Driver Activated","X",{duration:3000});
          }         
        });
      }      
    })
  }

  importDrivers()
  {
    this.dialog.open(ImportdriverComponent,{autoFocus:false,disableClose:true});
  }

  openProfile(row) {
    this.dialog.open(DriverprofileComponent,{autoFocus:false,disableClose:true,data:{row}})
  }

}
