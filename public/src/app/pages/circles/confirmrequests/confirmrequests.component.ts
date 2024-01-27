import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { ConnectpeopleComponent } from '../connectpeople/connectpeople.component';
import { CircleService } from '../circle.service';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-confirmrequests',
  templateUrl: './confirmrequests.component.html',
  styleUrls: ['./confirmrequests.component.scss']
})
export class ConfirmrequestsComponent implements OnInit {
again:boolean=false;
  supplierName:any;
  ownerId:any;
  toOwnerId:any;
  user
  constructor(@Inject (MAT_DIALOG_DATA) public data,
  private dialog:MatDialog,
  private circleService:CircleService,
  private auth:AuthService,
  private snackBar:MatSnackBar
  ) {
    if(data.temp!=null)
    {
      this.supplierName=data.temp.name;
      this.toOwnerId=data.temp.ownerId;
      this.again=data.again;
    }
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
    })
  }
  confirmRequest(){
    var temp={
      name:this.user.name,
      fromOwnerId:this.user.ownerId,
      toOwnerId:this.toOwnerId
    }
    if(!this.again)
    {
    this.circleService.sendRequest(temp).subscribe()
    }
    else
    this.circleService.sendRequestAgain(temp).subscribe()
    this.snackBar.open("Your Request has been to sent",null,{duration:2000})
    this.dialog.closeAll()
  }
  cancelRequest(){
    this.dialog.closeAll()
  }

}
