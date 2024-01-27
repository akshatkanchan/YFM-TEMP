import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AdvancepaymentService } from './advancepayment.service';
import { AuthService } from '../../../core/auth.service';
import { BankAccountService } from '../new-bank-account/bank-account.service';
import { User } from '../../../core/user';
import { FormControl } from '@angular/forms';
import { BankAccount } from '../new-bank-account/bank-account';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-advancepayment',
  templateUrl: './advancepayment.component.html',
  styleUrls: ['./advancepayment.component.scss']
})
export class AdvancepaymentComponent implements OnInit {
  
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
  ) {
    if(this.data != null) {
      this.bookingId = data.id;
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
    this.advancePayment.bid = this.bookingId;
    this.advancepaymentService.addAdvancePayment(this.advancePayment).subscribe(data => {
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

export interface Advancepayment {
  id?: string,
  bid?: string,
  flightBookingId?:string,
  hotelBookingId?:string,
  visaId?:string,
  amount?: number,
  paymentMode?: string;
  chequeNumber?: string;
  bankName?: string;
  chequeDate?: string;
  transactionNumber?: string;
  neftBankName?: string;
  receivedInBank?: string;
  bankCreditDate?: string;
}