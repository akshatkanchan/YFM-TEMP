import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';

@Component({
  selector: 'app-newcustomergroup',
  templateUrl: './newcustomergroup.component.html',
  styleUrls: ['./newcustomergroup.component.scss']
})
export class NewcustomergroupComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  user:User={}
  editState:boolean
  constructor(private http:Http,
    private dialog:MatDialog,
    private snackBar:MatSnackBar,
    private auth:AuthService,
    @Inject (MAT_DIALOG_DATA) public data
    ) {
      if(data){
        this.newCustomerGroup=data
        this.editState=true
      }
      else{
        this.editState=false
      }
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.newCustomerGroup.ownerId=data[0].ownerId
    })
  }
  submit(){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/customers/addCustomerGroup',this.newCustomerGroup,{headers:headers}).subscribe(data=>data.json());
    this.dialog.closeAll();
    this.snackBar.open("Customer Group Added",null,{duration:2000});
  }
  update(){
    this.editCustomerGroups(this.newCustomerGroup).subscribe(data=>{
      this.snackBar.open("Customer Group Updated",null,{duration:3000})
      this.dialog.closeAll()
    })
  }
  close(){
    this.dialog.closeAll()
  }
  getCustomerGroups(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveCustomerGroup',temp,{headers:headers}).map(data=>data.json())
  }
  editCustomerGroups(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/updateCustomerGroup',temp,{headers:headers}).map(data=>data.json())
  }
  deleteCustomerGroups(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/deleteCustomerGroup',temp,{headers:headers}).map(data=>data.json())
  }
newCustomerGroup:CustomerGroup={  
  name:'',
  ownerId:''
}
}
export interface CustomerGroup{
  id?:string,
  name?:string;
  ownerId?:string;
}
