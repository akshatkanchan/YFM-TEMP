import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../../core/user';
import { Advancepayment } from '../../operations/advancepayment/advancepayment.component';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AdvancepaymentService } from '../../operations/advancepayment/advancepayment.service';
import { AuthService } from '../../../core/auth.service';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'visa-advancepayment',
  templateUrl: './visa-advancepayment.component.html',
  styleUrls: ['./visa-advancepayment.component.scss']
})
export class VisaAdvancepaymentComponent implements OnInit {

  user:User={};
  bookingId;
  advancePayment: Advancepayment = {};
  cheque: boolean = false;
  neft: boolean = false;
  bankAccounts: BankAccount[];
  bankAccount: any;
  receivedInBankCtrl = new FormControl();

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private advancepaymentService: AdvancepaymentService,
    private auth:AuthService,
    private bankAccountService:BankAccountService,
    private snackBar: MatSnackBar,
  ) {
    if(this.data != null) {
      this.bookingId = data.visaId;
    }
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]      
      this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
        this.bankAccounts = data;        
        this.bankAccount=this.receivedInBankCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterBankAccounts(val))
        )
      })                          
    })
  }

  checkPaymentMode(temp) {    
    console.log(temp)
    if(temp == "Cheque") {
      this.cheque = true;
      this.neft = false;
    }
    else if(temp == "NEFT") {
      this.cheque = false;
      this.neft = true;
    }
    else
    {
      this.cheque=false;
      this.neft=false
    }
  }

  setReceivedInBank(option, event: any) {
    if(event.source.selected == true) {
      // console.log(option);
      this.advancePayment.receivedInBank = option.id
    }
  }

  saveAdvancePayment() {
    this.advancePayment.visaId = this.bookingId;
    this.advancepaymentService.addVisaAdvancePayment(this.advancePayment).subscribe(data => {},err=>{},()=>{
      this.snackBar.open("Advance Payment Added", "X", {duration: 3000});
      this.dialog.closeAll();
    });
  }

  filterBankAccounts(val: string) {
    return this.bankAccounts.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  closeDialog() {
    this.dialog.closeAll()
  }

}
