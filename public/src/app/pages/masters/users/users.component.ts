import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUser } from '../sub-users/sub-user';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { ChangedriverpasswordComponent } from '../changedriverpassword/changedriverpassword.component';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  length;
  pageSize = 10;  // set default to 10
  pageSizeOptions = [10, 15, 25, 40];
  dataSource;
  displayedColumns=['userName','name','email','type','Options'];
  user:User;
  permission:SubUser={};
  ws:WebSocket;

  constructor(
    private router:Router,
    private auth:AuthService,
    private permissionService:SubUserService,
    private snackBar:MatSnackBar,
    private dialog:MatDialog,
  ) { }

  ngOnInit() {
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.ws.onmessage = function (event) {
      if(event.data==this.user.ownerId+'user')
      this.auth.retrieveOwners(this.user).subscribe(data=>{
        this.dataSource=data;
      })                     
    }.bind(this);
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data=>{
        this.permission=data[0]
        if(this.permission.manageUsers === 0) {
          this.displayedColumns.pop()
        }
        if(data[0].addUsers==1){
          this.auth.retrieveOwners(this.user).subscribe(data=>{
            this.dataSource=data;
          })
        }
        else{
          window.alert("You do not have permission to view users")
        }
      })
    })
  }

  ngOnDestroy() {
    this.ws.close();
  }

  newUser(){
    this.router.navigateByUrl('pages/masters/newuser')
  }
  selectRow(row) {
    console.log(row)
    this.router.navigate(['pages/masters/newuser'],{queryParams:{id:row.id}})
  }

  deactivateUser(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.auth.deactivateUser(row).subscribe(data=>{
          if(data.errno==undefined)
          {                        
            this.ws.send(this.user.ownerId+"user");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("User Deactivated","X",{duration:3000});
          }         
        });
      }      
    })
  }
  changeDriverPassword(row){
    this.dialog.open(ChangedriverpasswordComponent,{disableClose:true,autoFocus:false,data:row})
  }
  activateUser(row) {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.auth.deactivateUser(row).subscribe(data=>{
          if(data.errno==undefined)
          {            
            this.ws.send(this.user.ownerId+"user");
            // var i=this.tempArray.indexOf(row);
            // this.tempArray.splice(i,1);
            // this.datasource.data=this.tempArray;
            this.snackBar.open("User Activated","X",{duration:3000});
          }         
        });
      }      
    })
  }
}
