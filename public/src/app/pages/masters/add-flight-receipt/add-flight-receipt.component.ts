import { Component, OnInit, HostListener } from '@angular/core';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import { FormControl } from '@angular/forms';
import { Booking } from '../../operations/booking';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerGroup, NewcustomergroupComponent } from '../newcustomergroup/newcustomergroup.component';
import { User } from '../../../core/user';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { SelectinvoicesComponent } from '../selectinvoices/selectinvoices.component';
import  * as moment from 'moment';
import { CustomerService } from '../customer/customer.service';
import { ReceiptService } from '../addreceipts/receipt.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { Receipt } from '../addreceipts/receipt';
import { SelectflightinvoicesComponent } from '../selectflightinvoices/selectflightinvoices.component';
import { Router } from '@angular/router';

@Component({
  selector: 'add-flight-receipt',
  templateUrl: './add-flight-receipt.component.html',
  styleUrls: ['./add-flight-receipt.component.scss']
})
export class AddFlightReceiptComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  cheque: boolean = false;
  neft: boolean = false;
  bankAccounts: BankAccount[];
  bankAccount: any;
  receivedInBankCtrl = new FormControl();

  cname:any
  invoiceData:Booking[];
  selectedInvoices:any=[];
  customersObs:Observable<Customer[]>;
  customerGroup:Observable<CustomerGroup[]>;
  invoicesTemp:boolean;
  tdsAmountTotal=0;
  adjustmentTotal=0;
  semiFinalTotal:number=0;
  finalTotal=0;
  invoices:{
    selector:''
  }
  selectedCustomer='';
  customerGroupId='';
  user:User={}

  ngOnInit(){
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

      this.customerService.getCustomers(this.user).subscribe(data=>{
        this.customersObs=data;        
      });

      this.receipt.ownerId=data[0].ownerId
      this.customerGroupService.getCustomerGroups(this.user).subscribe(data=>{
        this.customerGroup=data;
        console.log(data)
      })
    })
    
  }
  setCustomerGroupId(temp,event:any){

    if(event.source.selected==true)
    {

      if(this.customerGroupId!=temp.id)
      {
        this.selectedInvoices=[]
        this.semiFinalTotal = 0;
        this.finalTotal=0;
        this.tdsAmountTotal =0;
        this.adjustmentTotal =0;
        this.cname=''
      }

      this.receipt.customerGroup=temp.name;
      this.receipt.customerGroupId=temp.id;
      this.customerGroupId=temp.id
      var custTemp=
      {
        user:this.user,
        customerGroupId:temp.id
      }
      this.customerService.getCustomersById(custTemp).subscribe(data=>{
        this.customersObs=data;
        console.log(data)
      })
    }
  }

  addInvoices(){
    if(this.customersObs==null){
      this.snackBar.open("Please Select One Customer",null,{duration:2000})
    }
    else
    {
      var params={
        selectedCustomer:this.selectedCustomer,
        selectedInvoices:this.selectedInvoices
      }
      this.dialog.open(SelectflightinvoicesComponent,{data:params,autoFocus:false,disableClose:true}).afterClosed().subscribe(data=>
        { this.finalTotal=0;
          // console.log(data)
            data.forEach(element => {
                
                element.tdsPercent=0;
                element.tdsAmount=0;
                element.adjustment=0;
                
                // console.log(element)
                
                this.semiFinalTotal=this.semiFinalTotal+(Number)(element.totalAmount);
              element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
                this.finalTotal=this.finalTotal+element.invoiceTotal;
              this.selectedInvoices=data

            });
        });
    }
    
  }
  changeTdsAmount()
  {
   
    this.tdsAmountTotal=0
    this.finalTotal=0;
    this.selectedInvoices.forEach(element => {
      element.tdsPercent=(element.tdsAmount/element.totalAmount*100);
      this.tdsAmountTotal=this.tdsAmountTotal+(Number)(element.tdsAmount);
      element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
      this.finalTotal=this.finalTotal+element.invoiceTotal;
    });
    
  }
  changeTdsPercent()
  {this.tdsAmountTotal=0;
    this.finalTotal=0;
    this.selectedInvoices.forEach(element => {
      element.tdsAmount=(element.tdsPercent/100*element.totalAmount);
      this.tdsAmountTotal=this.tdsAmountTotal+(Number)(element.tdsAmount);
      element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
      this.finalTotal=this.finalTotal+element.invoiceTotal;  
    });

  }
  changeAdjustment()
  {
    this.adjustmentTotal=0;
    this.finalTotal=0;
    this.selectedInvoices.forEach(element => {
      this.adjustmentTotal=this.adjustmentTotal+(Number)(element.adjustment);
      element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
      this.finalTotal=this.finalTotal+element.invoiceTotal;
    });

  }
  closeDialog(){
    this.dialog.closeAll();
  }

  getInvoices(cust,event:any){

    if(event.source.selected==true)
    {
      if(cust.id!=this.selectedCustomer)
      {
        this.selectedInvoices=[]
        this.semiFinalTotal = 0;
        this.finalTotal=0;
        this.tdsAmountTotal =0;
        this.adjustmentTotal =0;
      }
      this.receipt.customerName=cust.name;
      this.receipt.customerId=cust.id
      this.selectedCustomer=cust.id
    }
  }

  saveReceipt()
  {


    if(this.receipt.customerGroup=="")
    {
      this.snackBar.open('Enter Customer Group',null,{
        duration:5000
      });
    }
    else if(this.receipt.number.trim()=="")
    {
      this.snackBar.open('Enter receipt number',null,{
        duration:5000
      });
    }
    else if(this.receipt.date=="")
    {
      this.snackBar.open('Enter Date',null,{
        duration:5000
      });
    }
    else if(this.receipt.paymentReceived.trim()=="")
    {
      this.snackBar.open('Enter Payment Received',null,{
        duration:5000
      });
    }
    else if(this.receipt.tds.trim()=="")
    {
      this.snackBar.open('Enter TDS',null,{
        duration:5000
      });
    }
    // else if(this.receipt.adjustment.trim()=="")
    // {
    //     this.snackBar.open('Enter Adjustments',null,{
    //       duration:5000
    //     });
    // }
    else if(this.receipt.paymentMode.trim()=="")
    {
      this.snackBar.open('Enter Payment Mode',null,{
        duration:5000
      });
    }
    else if(this.receipt.receivedInBank=="")
    {
      this.snackBar.open('Enter Received in Bank Details',null,{
        duration:5000
      });
    }
    
    // else if(this.receipt.bankCreditDate.trim()=="")
    // {
    //     this.snackBar.open('Enter Bank Credit Date',null,{
    //       duration:5000
    //     });
    // }
    else
    {
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
        console.log("receipt")
        this.receipt.date=moment(this.receipt.date).format("YYYY-MM-DD");
        this.receipt.bankCreditDate=moment(this.receipt.bankCreditDate).format("YYYY-MM-DD")
        this.receiptService.addFlightReceipt(this.receipt).subscribe(data=>{          
          this.selectedInvoices.forEach(element => {
            var temp={
              receiptId:data.insertId,
              invoice:element
            }
            console.log(element)
            this.receiptService.addFlightInvoices(temp).subscribe();
          });
        // if(data.affectedRows==1){
        //   this.param.inserted='yes';
        //   this.param.data=this.receipt;

        //   this.matDialogRef.close(this.param);
        // } 
        },err=>{},()=>{
          this.snackBar.open("Receipt Added","X",{duration: 3000});
          this.router.navigateByUrl('/pages/masters/receiptsdisp');
        });
      }
    }  
  }

  constructor(private customerService:CustomerService,
    private receiptService:ReceiptService,
    public snackBar:MatSnackBar,
    private dialog:MatDialog,
    // private matDialogRef:MatDialogRef<AddReceiptsComponent>,
    // @Inject(MAT_DIALOG_DATA) public data,
    private auth:AuthService,
    private customerGroupService:NewcustomergroupComponent,
    private bankAccountService:BankAccountService,
    private router: Router,
  ){
    // if(data!=null)

    // { this.receipt.id=data.id;
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
  param={
    inserted:'no',
    data:null
  }
  receipt:Receipt={
        customerGroup:'',
        customerGroupId:'',
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

        //added recently
        bankName:'',
        chequeNumber:'',
        chequeDate:'',
        neftBankName:'',
        transactionNumber:''
      
  }
  getInvoicesData()
  {
    this.receiptService.getInvoiceInFlightReceipts(this.receipt).subscribe(data=>{
      
      this.finalTotal=0;
            data.forEach(element => {
                this.semiFinalTotal=this.semiFinalTotal+(Number)(element.totalAmount);
              element.invoiceTotal=element.totalAmount-element.tdsAmount-element.adjustment;
                this.finalTotal=this.finalTotal+element.invoiceTotal;
              this.selectedInvoices.push(element) 
            });
            this.changeTdsAmount();
            this.changeAdjustment();
           
    }
    )
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

  filterBankAccounts(val: string) {
    return this.bankAccounts.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }

  setReceivedInBank(option, event: any) {
    if(event.source.selected == true) {
      // console.log(option);
      this.receipt.receivedInBank = option.id
    }
  }

}
