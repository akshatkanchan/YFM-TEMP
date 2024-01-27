import { Component, OnInit, Inject } from '@angular/core';
import {BankAccountService} from './bank-account.service';
import { BankAccount } from './bank-account';
import { AuthService } from '../../../core/auth.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-new-bank-account',
  templateUrl: './new-bank-account.component.html',
  styleUrls: ['./new-bank-account.component.scss']
})
export class NewBankAccountComponent implements OnInit {

  ownerId:any;
  editData: boolean = false;

  constructor(private bankAccountService:BankAccountService,
    private auth:AuthService,
    private matDialogRef:MatDialogRef<NewBankAccountComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
  ) { 
    console.log(data)
    if(this.data != null) {
      this.bankAccount = data;
      this.editData = true;
    }
  }
  saveBankAccount()
  {
    this.bankAccountService.addBankAccount(this.bankAccount).subscribe(data=>{
      if(data.affectedRows==1){
        console.log(data)
        this.param.inserted='yes';
        this.bankAccount=data.insertId;
        this.param.data=this.bankAccount
        this.matDialogRef.close(this.param);

      }
    }, err=>{},()=>{
      this.snackBar.open("Bank Account Added","X",{duration: 3000});
      this.dialog.closeAll();
    });
  }

  updateBankAccount() {
    this.bankAccountService.updateBankAccount(this.bankAccount).subscribe(data=>{
      this.snackBar.open("Bank Account Updated","X",{duration:3000});
      this.dialog.closeAll()
    })
  }
  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.bankAccount.ownerID=data[0].ownerId
    })
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  param={
    inserted:'no',
    data:null
  }
  bankAccount:BankAccount={
    name:'',
    number:'',
    bankName:'',
    branch:'',
    ifscCode:'',
    chequeInTheNameOf:'',
    ownerID:'',
 
   
  }

}
