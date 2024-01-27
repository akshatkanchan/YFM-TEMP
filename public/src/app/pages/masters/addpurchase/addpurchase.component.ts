import { Component, OnInit, HostListener } from '@angular/core';

import { AuthService } from '../../../core/auth.service';

import { Invoice } from '../createinvoice/invoice';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { InvoiceService } from '../createinvoice/invoice.service';

import { Booking } from '../../operations/booking';
import { Customer } from '../customer';
import { DutiesdispComponent } from '../dutiesdisp/dutiesdisp.component';
import { SupplierdispComponent } from '../supplierdisp/supplierdisp.component';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./addpurchase.component.scss'],
  templateUrl: './addpurchase.component.html',
})
export class AddPurchaseComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  myForm:FormGroup;
  taxForm:FormGroup;
  selectedDuties=[]
  selectedBookings:any;
  prefix: string;
  invoiceNumber: string;
  subInvoiceNumber: string;
  newInvoiceNumber: string;
  newSubInvoiceNumber: number;
  oldYear1: string;
  newYear1: string;
  fyear1 = new Date;
  oldYear2: string;
  newYear2: string;
  fyear2 = new Date;
  oldMonth: string;
  newMonth: string;
  fmonth = new Date;
  
  totalTaxablePrice:number=0;
  totalNonTaxablePrice:number=0;
  totalTaxablePriceAfterTax:number=0;
  totalPrice:number=0;
  dutyIds = [];
  extras=[];
 
  

  isDiscounted:Boolean=false;
  tax: any;
  custTax: string = "";
  constructor(private fb:FormBuilder,
    public dialog:MatDialog,private invoiceService:InvoiceService,
    private snackBar:MatSnackBar,
    private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.invoice.ownerId=data[0].ownerId
      var temp = {
        ownerId: data[0].ownerId
      }
      this.invoiceService.getTaxes(temp).subscribe(data => {
        console.log(data)
        this.tax = data;
      })
      this.invoiceService.getInvoices(temp).subscribe(data => {        
        this.invoiceNumber = data[0].invoiceNumber;        
          // console.log(data[0].invoicePrefix)
          this.prefix = "PR";
          // console.log(((this.fyear1.getFullYear())-1).toString().slice(2,4));
          if((this.fmonth.getMonth()+1) > 3) {
            this.newYear1 = ((this.fyear1.getFullYear())).toString().slice(2,4);
            this.newYear2 = ((this.fyear2.getFullYear())+1).toString().slice(2,4);
          }
          else if((this.fmonth.getMonth()+1) < 4) {
            this.newYear1 = ((this.fyear1.getFullYear())-1).toString().slice(2,4);
            this.newYear2 = ((this.fyear2.getFullYear())).toString().slice(2,4);
          }
          // console.log((this.fyear2.getFullYear())+1);                    
          // console.log(this.fmonth.getMonth()+1);
          // if((this.fmonth.getMonth()+1) > 9) {
          //   this.newMonth = (this.fmonth.getMonth()+1).toString();
          //   console.log(this.newMonth);
          // }
          // else if((this.fmonth.getMonth()+1) < 10) {
          //   this.newMonth = "0"+(this.fmonth.getMonth()+1).toString();
          //   console.log(this.newMonth);
          // }
          // console.log(this.prefix)
          // console.log(this.invoiceNumber.replace(this.prefix, ""));
          this.invoiceNumber = this.invoiceNumber.replace(this.prefix, "");
          // console.log(this.invoiceNumber)
          this.oldYear1 = this.invoiceNumber.substr(0,2);
          // console.log(this.oldYear1);
          this.oldYear2 = this.invoiceNumber.substr(2,2);
          // console.log(this.oldYear2);
          // this.oldMonth = this.invoiceNumber.substr(4,2);
          // console.log(this.oldMonth);
          // console.log(this.invoiceNumber.substr(6));
          this.subInvoiceNumber = this.invoiceNumber.substr(4);
          // console.log(this.invoiceNumber);
          // this.newInvoiceNumber = toInteger(this.invoiceNumber);
          // this.newInvoiceNumber++;
          if((this.newYear1 == this.oldYear1) && (this.newYear2 == this.oldYear2) /*&& (this.oldMonth == this.newMonth)*/) {
            if(this.subInvoiceNumber == "9999") {
              this.newSubInvoiceNumber = toInteger(this.subInvoiceNumber);
              this.newSubInvoiceNumber++;
              this.newInvoiceNumber = this.prefix+this.newYear1+this.newYear2/*+this.newMonth*/+this.newSubInvoiceNumber;
            }
            else {
              this.newSubInvoiceNumber = toInteger(this.invoiceNumber);
              this.newSubInvoiceNumber++;
              this.newInvoiceNumber = this.prefix+this.newSubInvoiceNumber;
            }
          }
          else if(this.newYear1 != this.oldYear1) {
            this.newInvoiceNumber = this.prefix+this.newYear1+this.newYear2/*+this.newMonth*/+"0001";
          }
          // else if(this.newMonth != this.oldMonth) {
          //   this.newInvoiceNumber = this.prefix+this.newYear1+this.newYear2+this.newMonth+"0001";
          // }
          console.log(this.newInvoiceNumber);        
      })
    })
    this.myForm = this.fb.group({
      rows: this.fb.array([])
    })

    this.taxForm = this.fb.group({
      taxrows: this.fb.array([]),
     
    })
  }
  viewduties() {
    if(this.selectedClient.id!=null) {
      var temp = {
        clientId:this.selectedClient.customerOwnerId,
        duties:this.selectedDuties
      }      
      var dialTemp=this.dialog.open(DutiesdispComponent,{autoFocus:false,disableClose:true,data:{temp}});
      dialTemp.afterClosed().subscribe(data => {         
        if(data)
        this.selectedDuties=data
        this.selectedDuties.forEach(element => {
          this.dutyIds.push(element.id);
        })
        console.log(this.selectedDuties);
        if(this.selectedDuties.length > 0) {
          this.invoiceService.getExtraCharges({idArray:this.dutyIds}).subscribe(data => {
            console.log(data);
            this.extras = data;
            for(var v in this.selectedDuties) {
              console.log(v);
              
              for(var e in this.extras) {
                console.log(e);
                
                if(this.extras[e].dutyId == this.selectedDuties[v].id) {
                  if(this.selectedDuties[v].extras == undefined) {
                    this.selectedDuties[v].extras = [{name: this.extras[e].name, charges: this.extras[e].charges}]
                  }
                  else {
                    this.selectedDuties[v].extras.push({name: this.extras[e].name, charges: this.extras[e].charges})
                  }                    
                }
              }              
            }
          });
        }     
        // this.getTax(1);
        this.calculateTotal()        
      });
    }
    else {
      this.snackBar.open('Select Supplier',null, {
        duration:5000,
      });
    }
  }
  selectClient() { 
    var dial=this.dialog.open(SupplierdispComponent,{autoFocus:false,disableClose:true});
    dial.afterClosed().subscribe(data => {    
      if(data) {
        console.log(data)
        this.selectedClient=data;
        this.invoice.customerId=data.id;
        console.log(this.selectedCustomer.applicableTaxes)
        var cTax = this.tax.find(x=>x.id===Number(this.selectedCustomer.applicableTaxes))
        console.log(cTax)
        this.custTax = cTax.name
      }
    });   
  }
  selectedClient:any = {
    id:'',
    Name:'',
    supplierId:'',
    supplierName:'',
    ownerId:''
  }
   
  //this.dialog.open(AddCustomerComponent,{autoFocus:false,disableClose:truedata:{row}});
  get invoiceForms() {
    return this.myForm.get('rows') as FormArray
  }

  get taxableForms() {
    return this.taxForm.get('taxrows') as FormArray
  }
  
  addRow(taxableTemp:boolean) {  
    const row = this.fb.group({
      description:'',
      rate:'',
      quantity:'',
      amount:'',
      taxable:taxableTemp,
    })
    
    this.invoiceForms.push(row);
  }
  addBookingRow(booking:Booking) {
    const row = this.fb.group({
      description:"Reporting Address:\r\n"+booking.reportingAddress,
      rate: new FormControl(''),
      quantity:new FormControl(''),
      amount:new FormControl(''),
      taxable:true,
    })
    
    this.invoiceForms.push(row);
  
  }


  addTax() {
    const row = this.fb.group({
      taxtype:'',
      percentage:''
    })
    
    this.taxableForms.push(row);
  }
  
  deleteRow(i) {
    this.invoiceForms.removeAt(i);
    this.calculateTotal()
  }

  deleteTaxRow(i) {
    this.taxableForms.removeAt(i);
  }
  selectedCustomer:Customer = {
    panNo:'',
    caddress:'',
    gstin:'',
    name:'',    
  };

  getTax(option1, option2: number, event: any) {
    if(event.source.selected == true) {
      this.invoice.taxType = option1;
      this.invoice.taxRate = option2;
      this.calculateTotal()
    }
  }

  calculateCharges(element) {     
    element.get('amount').setValue(element.value.rate*element.value.quantity)    
    this.calculateTotal()
  }

  calculateTotal() {
    this.totalPrice=0;
    //taxable row calculation
    this.totalTaxablePrice=0;
    this.totalNonTaxablePrice=0;
    this.invoice.taxAmount=0;
    this.selectedDuties.forEach(element => {
      this.totalTaxablePrice=Number(this.totalTaxablePrice)+Number(element.price)+Number(element.extraChargesTotal);
    });
    if(this.isDiscounted == true) {
      if(this.invoice.discountType == "Hire") {
        this.invoice.discountAmount=this.invoice.discountRate/100*this.totalTaxablePrice;
      }
   }

    this.invoiceForms.controls.forEach(element => {
      if(element.value.taxable) {
        this.totalTaxablePrice+=element.value.amount
      }
      else if(!element.value.taxable) {
        this.totalNonTaxablePrice+=element.value.amount
      }
    });
    if(this.isDiscounted)
      this.calculateDiscount();
    this.invoice.taxAmount = (Number(this.invoice.taxRate)/100)*Number(this.totalTaxablePrice);
    this.totalTaxablePriceAfterTax = Number(this.totalTaxablePrice)+Number(this.invoice.taxAmount);
    this.totalPrice = Number(this.totalTaxablePriceAfterTax)+Number(this.totalNonTaxablePrice);
    if((Math.ceil(this.totalPrice)-this.totalPrice) < 0.50 ) {      
      this.totalPrice = Math.ceil(this.totalPrice);
      console.log(this.totalPrice)
    }
    else if((Math.ceil(this.totalPrice)-this.totalPrice) > 0.50) {
      this.totalPrice = Math.floor(this.totalPrice)
      console.log(this.totalPrice)
    }

  }
  //add invoice
  addInvoice() {
    var extra=[];
    this.invoiceForms.controls.forEach(element => {
      extra.push(element.value)
    });
    this.invoice.customerId=this.selectedClient.id;
    this.invoice.totalAmount=this.totalPrice;
    this.invoice.taxableAmount = this.totalTaxablePrice;
    this.invoice.nonTaxableAmount = this.totalNonTaxablePrice;
    var temp = {
      invoice: this.invoice,
      duty: this.selectedDuties,
      extra:extra,
      booking: null
    }
    this.invoiceService.addInvoicePurchase(temp).subscribe(data => {
    },err=>{},()=>{
      this.snackBar.open("Invoice Created","X",{duration: 3000});
      this.router.navigateByUrl('/pages/masters/purchase-invoice');
    });
  }
  isDiscount() {
    this.isDiscounted=!this.isDiscounted;
    this.calculateTotal();
  }
  calculateDiscount() {
    if(this.isDiscounted == true) {
      if(this.invoice.discountType == "Amount") {
        this.invoice.discountAmount = Number(this.invoice.discountRate);
      }
      else if(this.invoice.discountType == "Percent") {
        this.invoice.discountAmount=Number(this.invoice.discountRate/100*this.totalTaxablePrice);
      }
      this.totalTaxablePrice=this.totalTaxablePrice-this.invoice.discountAmount;    
   }
  }

  getDiscount(option:any) {
    if(option==1)
      this.invoice.discountType="Amount";
    else if(option==2)
      this.invoice.discountType="Percent"
    else if(option==3)
      this.invoice.discountType="Hire"

    this.calculateTotal()
  }

  discountRates(discountRate) {
    this.invoice.discountRate=discountRate;
    this.calculateTotal()
  }
  invoice:Invoice = {
    ownerId:'',
    customerId:'',
    
    invoiceNumber:'',
    invoiceDate:new Date().toISOString().split('T')[0],
    invoicePeriodFrom:'',
    invoicePeriodTo:'',
    PONumber:'',
    CCNumber:'',
    discountType:'',
    discountRate:0,
    discountAmount:0,
    taxType:'',
    taxRate:0,
    taxAmount:0,
    totalAmount:0, 
    taxableAmount: 0,
    nonTaxableAmount: 0,
    supplierInvoiceNumber: '',
    supplierInvoiceDate: new Date().toISOString().split('T')[0],
  }
}
