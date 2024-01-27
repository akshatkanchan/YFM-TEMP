import { Component, OnInit, ViewChild } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatPaginator, MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import {EmployeeService} from '../new-employees/employee.service';
import {NewEmployeesComponent} from '../new-employees/new-employees.component';
import {Employee} from '../new-employees/employee';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { NewuserComponent } from '../newuser/newuser.component';
import { SubUser } from '../sub-users/sub-user';
import { EmployeeprofileComponent } from '../employeeprofile/employeeprofile.component';

@Component({
  selector: 'app-employeedisp',
  templateUrl: './employeedisp.component.html',
  styleUrls: ['./employeedisp.component.scss']
})
export class EmployeedispComponent implements OnInit {
  
  searchTerm;
  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  dataSource=new MatTableDataSource<Employee>();
  displayedColumns = ['name', 'email', 'mobilenumber','designation','employeeId','Options'];
  dutytype: Observable<Employee[]>;
  user:User={};
  tempArray:any[];
  ws:WebSocket;
  permission:SubUser={}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

 constructor(private employeeService:EmployeeService,
  public dialog:MatDialog,
  private auth:AuthService,
  private snackBar:MatSnackBar
  ) { }
  selectRow(row) {    
    this.dialog.open(NewEmployeesComponent,{autoFocus:false,disableClose:true,data:{row}}).afterClosed().subscribe(data=>{
      if(data==undefined){
      }
      else{
        if(data.inserted=='yes'){
          this.tempArray.push(data.data);
          this.dataSource.data=this.tempArray
         } 
      }
    });
  }
  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'employeedisp')
      this.employeeService.getEmployee(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
      })
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data => {
        this.permission=data[0]
      })
      // if(this.permission.manageEmployees === 0) {
      //   this.displayedColumns.pop();
      // }
      this.employeeService.getEmployee(this.user).subscribe(data=>{
        this.tempArray=data;
        this.dataSource.data=this.tempArray;
      })
    })
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }

  ngOnDestroy() {
    this.ws.close();
  }
  search(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  clear(){
    this.searchTerm='';
    this.dataSource.filter='';
  }
  deleteEmployee(row){
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
      this.employeeService.deleteEmployee(row).subscribe(data=>{
        if(data.errno==undefined)
        {
          var i=this.tempArray.indexOf(row);
          this.tempArray.splice(i,1);
          this.dataSource.data=this.tempArray;
          this.snackBar.open("Employee Deleted","X",{duration:3000});
        }
        else
        {
          if(data.errno==1451)
          {
            window.alert("Cannot delete because you have corresponding Duties");
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

  deactivateEmployee(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.employeeService.deactivateEmployee(row).subscribe(data=>{
          if(data.errno==undefined)
          {                        
            this.ws.send(this.user.ownerId+"employeedisp");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("Employee Deactivated","X",{duration:3000});
          }         
        });
      }      
    })
  }

  activateEmployee(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.employeeService.deactivateEmployee(row).subscribe(data=>{
          if(data.errno==undefined)
          {            
            this.ws.send(this.user.ownerId+"employeedisp");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("Employee Activated","X",{duration:3000});
          }         
        });
      }      
    })
  }
  createUser(row) {
    this.dialog.open(NewuserComponent,{data:{
      data:row,
      'employee':'true'
    }});
  }

  openProfile(row) {
    this.dialog.open(EmployeeprofileComponent,{autoFocus:false,disableClose:true,data:{row}})
  }
}