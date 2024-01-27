import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../../core/user';
import { Advancepayment } from '../../operations/advancepayment/advancepayment.component';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AdvancepaymentService } from '../../operations/advancepayment/advancepayment.service';
import { AuthService } from '../../../core/auth.service';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'hotel-advancepayment',
  templateUrl: './hotel-advancepayment.component.html',
  styleUrls: ['./hotel-advancepayment.component.scss']
})
export class HotelAdvancepaymentComponent implements OnInit {

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
    this.advancePayment.hotelBookingId = this.bookingId;
    this.advancepaymentService.addHotelAdvancePayment(this.advancePayment).subscribe(data => {
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
