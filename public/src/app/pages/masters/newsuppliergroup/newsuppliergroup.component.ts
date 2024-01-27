import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Http,Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-newsuppliergroup',
  templateUrl: './newsuppliergroup.component.html',
  styleUrls: ['./newsuppliergroup.component.scss']
})
export class NewsuppliergroupComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  constructor(private snackBar:MatSnackBar,private http:Http,private dialog:MatDialog,private auth:AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.newSupplierGroup.ownerId=data[0].ownerId
    })
  }
  submit(){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    this.http.post('/suppliers/addSupplierGroup',this.newSupplierGroup,{headers:headers}).subscribe(data=>data.json());
    this.snackBar.open("Supplier Added",null,{duration:2000})
    
    this.dialog.closeAll();
  }
  getSupplierGroups(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/suppliers/retrieveSupplierGroup',temp,{headers:headers}).map(data=>data.json());
  }

  closeDialog() {
    this.dialog.closeAll();
  }

newSupplierGroup:SupplierGroup={
  name:'',
  ownerId:''
}

}
export interface SupplierGroup{
  name?:string;
  ownerId?:string
}
