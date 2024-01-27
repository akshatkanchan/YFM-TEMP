import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { PettyCash, NewPettyCashComponent } from '../../masters/newpettycash/newpettycash.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-newpettycash',
  templateUrl: './newpettycash.component.html',
  styleUrls: ['./newpettycash.component.scss']
})
export class NewpettycashComponent implements OnInit {

  user:User={}
  supplierCondition=false;
  constructor(private auth:AuthService,@Inject (MAT_DIALOG_DATA) public data:any,private pettyCashService:NewPettyCashComponent,private matDialogRef:MatDialogRef<NewPettyCashComponent>) {
    if(data){
      this.pettyCash.driver=data.row.driver;
      this.pettyCash.dutyId=data.row.id
    }
   }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.pettyCash.ownerId=data[0].ownerId
    })
  }
  addPettyCash(){
    this.pettyCashService.addPettyCash(this.pettyCash).subscribe()
  }
  condition(event){
    this.supplierCondition=!this.supplierCondition;
  }
  closeDialog(){
    this.matDialogRef.close();
  }
  pettyCash:PettyCash={
    date:'',
    voucherNumber:'',
    supplier:'',
    amount:'',
    transactionType:'',
    ownerId:'',
    dutyId:''
    

  }
}
