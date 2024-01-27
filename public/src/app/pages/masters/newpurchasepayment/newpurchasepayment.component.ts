import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Booking } from '../../operations/booking';
import { Customer } from '../customer';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../core/user';
import * as moment from 'moment'
import { CustomerService } from '../customer/customer.service';
import { ReceiptService } from '../addreceipts/receipt.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddReceiptsComponent } from '../addreceipts/addreceipts.component';
import { AuthService } from '../../../core/auth.service';
import { Receipt } from '../addreceipts/receipt';
import { SelectpurchaseinvoicesComponent } from '../selectpurchaseinvoices/selectpurchaseinvoices.component';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'newpurchasepayment',
  templateUrl: './newpurchasepayment.component.html',
  styleUrls: ['./newpurchasepayment.component.scss']
})
export class NewpurchasepaymentComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  cheque: boolean = false;
  neft: boolean = false;
  receivedInBankCtrl = new FormControl();
  invoiceData:Booking[];
  selectedInvoices:any=[];
  customersObs:Observable<Customer[]>;  
  invoicesTemp:boolean;
  tdsAmountTotal=0;
  adjustmentTotal=0;
  semiFinalTotal:number=0;
  finalTotal=0;
  invoices: {
    selector:''
  }
  selectedCustomer = '';
  user: User = {}
  bankAccounts: BankAccount[];
  bankAccount: any;
  
  ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user = data[0]

      this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
        this.bankAccounts = data;        
        this.bankAccount=this.receivedInBankCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterBankAccounts(val))
        )
      })

      this.receipt.ownerId = data[0].ownerId
      this.customerService.getB2BCustomers(this.user).subscribe(data => {
        this.customersObs = data;
      })
    })    
  }

  filterBankAccounts(val: string) {
    return this.bankAccounts.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  addInvoices() {
    if(this.receipt.customerName == '') {
      this.snackBar.open("Please Select One Customer",null,{duration:2000})
    }
    else {
      this.dialog.open(SelectpurchaseinvoicesComponent,{data:this.selectedCustomer,autoFocus:false,disableClose:true}).afterClosed().subscribe(data => {
        this.finalTotal=0;
        data.forEach(element => {
          if(element.selected == true) {                
            element.tdsPercent=0;
            element.tdsAmount=0;
            element.adjustment=0;                                
            this.semiFinalTotal=this.semiFinalTotal+(Number)(element.totalAmount);
            element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
            this.finalTotal=this.finalTotal+element.invoiceTotal;
            this.selectedInvoices.push(element)
          }
        });
      });
    }    
  }
  changeTdsAmount() {   
    this.tdsAmountTotal=0
    this.finalTotal=0;
    this.selectedInvoices.forEach(element => {
      element.tdsPercent=(element.tdsAmount/element.totalAmount*100);
      this.tdsAmountTotal=this.tdsAmountTotal+(Number)(element.tdsAmount);
      element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
      this.finalTotal=this.finalTotal+element.invoiceTotal;
    });    
  }
  changeTdsPercent() {
    this.tdsAmountTotal=0;
    this.finalTotal=0;
    this.selectedInvoices.forEach(element => {
      element.tdsAmount=(element.tdsPercent/100*element.totalAmount);
      this.tdsAmountTotal=this.tdsAmountTotal+(Number)(element.tdsAmount);
      element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
      this.finalTotal=this.finalTotal+element.invoiceTotal;  
    });
  }
  changeAdjustment() {
    this.adjustmentTotal=0;
    this.finalTotal=0;
    this.selectedInvoices.forEach(element => {
      this.adjustmentTotal=this.adjustmentTotal+(Number)(element.adjustment);
      element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
      this.finalTotal=this.finalTotal+element.invoiceTotal;
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  customerOwnerId:any;
  getInvoices(cust, event:any) {
    if(event.source.selected == true) {
      this.receipt.customerName = cust.name;
      this.receipt.customerId = cust.id;
      this.selectedCustomer = cust.id;
      this.customerOwnerId = cust.customerOwnerId;
    }
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

  saveReceipt() {    
    if(this.receipt.number.trim() == "") {
      this.snackBar.open('Enter receipt number',null,{
        duration:5000
      });
    }
    else if(this.receipt.date == "") {
      this.snackBar.open('Enter Date',null,{
        duration:5000
      });
    }
   
    else if(this.receipt.amount.trim() == "") {
      this.snackBar.open('Enter Amount',null,{
        duration:5000
      });
    }
    else if(this.receipt.tds.trim() == "") {
      this.snackBar.open('Enter tds',null,{
        duration:5000
      });
    }
    else if(this.receipt.adjustment.trim() == "") {
      this.snackBar.open('Enter adjustments', null, {
        duration:5000
      });
    }
    else if(this.receipt.paymentMode.trim() == "") {
      this.snackBar.open('Enter Payment Mode', null, {
        duration:5000
      });
    }
    else if(this.receipt.receivedInBank == "") {
      this.snackBar.open('Enter received in bank', null, {
        duration:5000
      });
    }
    // else if(this.receipt.bankCreditDate.trim()=="")
    // {
    //     this.snackBar.open('Enter Bank Credit Date',null,{
    //       duration:5000
    //     });
    // }
    else {
      if(this.receipt.paymentMode.trim()=="Cheque" && this.receipt.chequeNumber.trim()=="")
      {        
        this.snackBar.open('Enter Cheque Number',null,{
          duration:5000
        });
      }        
      else if(this.receipt.paymentMode.trim()=="Cheque" && this.receipt.bankName.trim()=="")
      {
        this.snackBar.open('Enter Bank Name for the cheque',null,{
          duration:5000
        });
      }            
      else if(this.receipt.paymentMode.trim()=="NEFT" && this.receipt.neftBankName.trim()=="")
      {        
        this.snackBar.open('Enter Bank name of NEFT',null,{
          duration:5000
        });
      }
      else if(this.receipt.paymentMode.trim()=="NEFT" && this.receipt.transactionNumber.trim()=="")
      {
        this.snackBar.open('Enter NEFT Transaction Number',null,{
          duration:5000
        });
      }
      else
      {    
        this.receipt.date=moment(this.receipt.date).format("YYYY-MM-DD");
        this.receipt.bankCreditDate=moment(this.receipt.bankCreditDate).format("YYYY-MM-DD")
        var purchasePayments = {
          receipt:this.receipt,
          customerOwnerId:this.customerOwnerId,
          ownerName:this.user.name,
          finalTotal:this.finalTotal
        }
        this.receiptService.addPurchasePayment(purchasePayments).subscribe(data => {
          this.selectedInvoices.forEach(element => {
            var temp = {
              receiptId:data.insertId,
              invoice:element
            }
            this.receiptService.addPurchaseInvoices(temp).subscribe(() => {
            
            });
          });
          if(data.affectedRows==1) {
            this.param.inserted='yes';
            this.param.data = this.receipt;  
          } 
        },err=>{},()=>{
          this.snackBar.open("Purchase Payment Added", "X", {duration: 3000});
          this.router.navigateByUrl('pages/masters/purchase-payments');
        });
      }
    }
  }

  constructor(
    private customerService:CustomerService,
    private receiptService:ReceiptService,
    public snackBar:MatSnackBar,
    private dialog:MatDialog,
    private matDialogRef:MatDialogRef<AddReceiptsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private auth:AuthService,   
    private bankAccountService:BankAccountService,
    private router: Router,
  ) {
    // if(data!=null) { 
    //   this.receipt.id=data.id;
    //   this.receipt.date=data.date
    //   this.receipt.customerGroup=data.customerGroup
    //   this.receipt.number=data.number
    //   this.receipt.paymentReceived=data.paymentReceived
    //   this.receipt.tds=data.tds
    //   this.receipt.adjustment=data.adjustment
    //   this.receipt.paymentMode=data.paymentMode
    //   this.receipt.receivedInBank=data.receivedInBank
    //   this.receipt.bankCreditDate=data.bankCreditDate
     
    //   this.getInvoicesData();
    // }
  }
  param = {
    inserted:'no',
    data:null
  }
  receipt: Receipt = {    
    customerName:'',
    customerId:'',
    number:'',
    date:'',
    paymentReceived:'',
    tds:'',
    adjustment:'',
    paymentMode:'',
    receivedInBank:'',
    bankCreditDate:'',  
    ownerId:'',
    amount:''    
  }
  getInvoicesData() {
    this.receiptService.getInvoiceInPurchasePayments(this.receipt).subscribe(data => {
      this.finalTotal=0;
      data.forEach(element => {
        this.semiFinalTotal=this.semiFinalTotal+(Number)(element.totalAmount);
        element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
        this.finalTotal=this.finalTotal+element.invoiceTotal;
        this.selectedInvoices.push(element) 
      });
      this.changeTdsAmount();
      this.changeAdjustment();           
    })
  }

  setReceivedInBank(option, event: any) {
    if(event.source.selected == true) {
      // console.log(option);
      this.receipt.receivedInBank = option.id
    }
  }
  
}
