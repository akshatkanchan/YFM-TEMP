import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { WalletService } from '../wallet.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import * as moment from 'moment'

@Component({
  selector: 'addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.scss']
})
export class AddmoneyComponent implements OnInit {

  user:User={};
  amount: number = 0;

  constructor(
    private dialog: MatDialogRef<AddmoneyComponent>,
    private walletService:WalletService,
    private auth:AuthService,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
    })
  }

  addMoney() {
    var temp={
      ownerId:this.user.ownerId,
      amount:this.amount,
      date:moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
    }
    this.walletService.updateWalletAmount(temp).subscribe(data=>{
      this.snackbar.open("Money added to the wallet","X",{duration:5000});
      this.dialog.close('yes');
    })
  }

  closeDialog() {
    this.dialog.close();
  }
}
