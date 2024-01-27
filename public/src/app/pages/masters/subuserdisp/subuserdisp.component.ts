import { Component, OnInit,ViewChild } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import {MatTableDataSource, MatSort, MatDialogRef} from '@angular/material';
import {MatDialog} from '@angular/material';
import { SubUserService } from '../sub-users/sub-user.service';
import { SubUsersComponent } from '../sub-users/sub-users.component';
import { SubUser } from '../sub-users/sub-user';
import { NewuserComponent } from '../newuser/newuser.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subuserdisp',
  templateUrl: './subuserdisp.component.html',
  styleUrls: ['./subuserdisp.component.scss']
})
export class SubuserdispComponent implements OnInit {

  displayedColumns = ['userName'];
  dataSource;
  subusers: Observable<SubUser[]>;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private subuserService:SubUserService,public dialog:MatDialog,private router:Router) { }
   selectRow(row) {
     this.dialog.open(SubUsersComponent,{autoFocus:false,disableClose:true,data:{row}});
   }
   addPermission(){
     this.dialog.open(SubUsersComponent,{autoFocus:false,disableClose:true,data:''})
   }
   ngOnInit() {
       
   }
 }