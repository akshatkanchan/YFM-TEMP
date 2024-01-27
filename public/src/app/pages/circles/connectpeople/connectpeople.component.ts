import { Component, OnInit } from '@angular/core';
import { CircleService } from '../circle.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { MatDialog } from '@angular/material';
import { ConfirmrequestsComponent } from '../confirmrequests/confirmrequests.component';

@Component({
  selector: 'app-connectpeople',
  templateUrl: './connectpeople.component.html',
  styleUrls: ['./connectpeople.component.scss']
})
export class ConnectpeopleComponent implements OnInit {
users:any[];
accepted: boolean = false;
pending: boolean = false;
request: boolean = false;
user:User={}
  constructor(private circleService:CircleService, 
    private auth:AuthService,
    private dialog:MatDialog
    ) { }

  ngOnInit() {

    this.auth.user.subscribe(data=>{
      this.user=data[0]

    this.circleService.getUsers(this.user.ownerId).subscribe(data=>
      {
        data.forEach(element => {
          console.log(element);
          if(element.status == "Accepted") {
            this.accepted = true;
            this.pending = false;
            this.request = false;
          }
          else if(element.status == "Pending") {
            this.pending = true;
            this.accepted = false;
            this.request = false
          }
          else {
            this.request = true;
            this.accepted = false;
            this.pending = false;
          }
        });
        this.users=data;
        
      })

    })
  }

  confirmRequest(temp){
   var data={
     temp:temp,
     again:false
   }
    this.dialog.open(ConfirmrequestsComponent,{data:data,autoFocus:false,disableClose:true})
  }
  confirmRequestAgain(temp){
    var data={
      temp:temp,
      again:true
    }
    this.dialog.open(ConfirmrequestsComponent,{data:data,autoFocus:false,disableClose:true})
  }
  sendRequest(row)
  {
    var temp={
      name:this.user.name,
      fromOwnerId:this.user.ownerId,
      toOwnerId:row.ownerId
    }
    this.circleService.sendRequest(temp).subscribe(data=>{
      
    })
  }
  sendRequestAgain(row)
  {
    var temp={
      name:this.user.name,
      fromOwnerId:this.user.ownerId,
      toOwnerId:row.ownerId
    }
    this.circleService.sendRequestAgain(temp).subscribe(data=>{
      
    })
  }

log()
{
}
}
