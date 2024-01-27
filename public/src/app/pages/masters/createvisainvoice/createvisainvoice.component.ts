import { Component, OnInit, HostListener } from '@angular/core';
import { Invoice } from '../createinvoice/invoice';
import { Customer } from '../customer';
import { Booking } from '../../operations/booking';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CustomerselectionComponent } from '../customerselection/customerselection.component';
import { BookingdispinvoiceComponent } from '../bookingdispinvoice/bookingdispinvoice.component';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/auth.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { CustomerService } from '../customer/customer.service';
import { BookingsService } from '../../operations/bookings.service';
import { InvoiceService } from '../createinvoice/invoice.service';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { VisadispinvoiceComponent } from '../visadispinvoice/visadispinvoice.component';

@Component({
  selector: 'createvisainvoice',
  templateUrl: './createvisainvoice.component.html',
  styleUrls: ['./createvisainvoice.component.scss']
})
export class CreatevisainvoiceComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  myForm:FormGroup;
  taxForm:FormGroup;
  selectedBookings:any[]=[];
  advanceReceived: number = 0;
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
  bookingData:any=null;
  tax:any[]=[];

  isDiscounted:Boolean=false;
  businessSettings: BusinessSettings={};

  constructor (
    private fb:FormBuilder,
    public dialog:MatDialog,private invoiceService:InvoiceService,
    private bookingService:BookingsService,
    private customerService:CustomerService,
    private snackBar:MatSnackBar,
    private auth:AuthService,
    private route:ActivatedRoute,
    private companyProfileService: CompanyprofileService,
    private router: Router,
  ) { }

  custTax : string ="";

  ngOnInit() {
    
    this.auth.user.subscribe(data=>{
      this.invoice.ownerId=data[0].ownerId
      var temp = {
        ownerId: data[0].ownerId
      }
      console.log(temp)
      this.invoiceService.getTaxes(temp).subscribe(data => {
        console.log(data)
        this.tax = data;        
        // this.getTax(this.tax[0].name, this.tax[0].percent);
      })
      console.log(this.tax)      
      this.invoiceService.getInvoices(temp).subscribe(data=>{
        var temp = {
          ownerId: data[0].ownerId
        }
        this.invoiceNumber = data[0].invoiceNumber;
        this.companyProfileService.getCompanyProfile(temp).subscribe(data => {
          if(data[0].invoicePrefix == null) {
            this.prefix = data[0].name;
            this.prefix = this.prefix.substr(0,3).toUpperCase();
          }
          else {            
            this.prefix = data[0].invoicePrefix;
          }
                    
          if((this.fmonth.getMonth()+1) > 3) {
            this.newYear1 = ((this.fyear1.getFullYear())).toString().slice(2,4);
            this.newYear2 = ((this.fyear2.getFullYear())+1).toString().slice(2,4);
          }
          else if((this.fmonth.getMonth()+1) < 4) {
            this.newYear1 = ((this.fyear1.getFullYear())-1).toString().slice(2,4);
            this.newYear2 = ((this.fyear2.getFullYear())).toString().slice(2,4);
          }          
          
          // if((this.fmonth.getMonth()+1) > 9) {
          //   this.newMonth = (this.fmonth.getMonth()+1).toString();
          //   console.log(this.newMonth);
          // }
          // else if((this.fmonth.getMonth()+1) < 10) {
          //   this.newMonth = "0"+(this.fmonth.getMonth()+1).toString();
          //   console.log(this.newMonth);
          // }
          
          this.invoiceNumber = this.invoiceNumber.replace(this.prefix, "");
          
          this.oldYear1 = this.invoiceNumber.substr(0,2);
          
          this.oldYear2 = this.invoiceNumber.substr(2,2);
          
          // this.oldMonth = this.invoiceNumber.substr(4,2);
          
          this.subInvoiceNumber = this.invoiceNumber.substr(4);
          
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
    })
    this.auth.businessSettings.subscribe(data => {
      this.businessSettings = data;
    })
    this.myForm = this.fb.group({
      rows: this.fb.array([])
    })
    this.taxForm = this.fb.group({
      taxrows: this.fb.array([]),     
    })
    this.bookingData=this.bookingService.getBookingId()
    if(this.bookingData!=null) {
      this.getCustomer()
      this.getBookings()
      console.log(this.bookingData)
    }
    this.bookingService.setBookingId(null)
    
  }

  getCustomer(){
    this.customerService.getSingleCustomer(this.bookingData).subscribe(data => {
      console.log(data)
      this.selectedCustomer = data[0]
    });
  }
  getBookings(){
    this.bookingService.getBookingsForInvoice(this.bookingData).subscribe(data => {
      console.log(data)
      this.selectedBookings = data
    })
  }

  viewBookings(){
    if(this.selectedCustomer.id!=null) {
      var temp = {
        customer:this.selectedCustomer.id,
        bookings:this.selectedBookings
      }
      console.log(temp);
      var dialTemp = this.dialog.open(VisadispinvoiceComponent, {autoFocus:false,disableClose:true, data: {temp}});
      dialTemp.afterClosed().subscribe(data => {         
        if(data) {
          this.selectedBookings = data
          console.log(this.selectedBookings)
          this.selectedBookings.forEach(element => {
            if(element.advance != null) {
              this.advanceReceived += element.advance;
            }
          })
          this.invoice.advanceReceived = this.advanceReceived;
        }
        this.calculateTotal()
        // this.getTax(1);
      });
    }
    else {
      this.snackBar.open('Select Customer', null, {
        duration:5000,
      });
    }      
  }
  
  selectCustomer() {
    var dial = this.dialog.open(CustomerselectionComponent, {autoFocus:false,disableClose:true});
    dial.afterClosed().subscribe(data => {    
      if(data) {        
        this.selectedCustomer = data;
        console.log(this.selectedCustomer)
        this.invoice.customerId = data.id;
        console.log(this.selectedCustomer.applicableTaxes)
        var cTax = this.tax.find(x=>x.id===Number(this.selectedCustomer.applicableTaxes))
        console.log(cTax)
        this.custTax = cTax.name
      }
    });    
  }

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
  deleteBooking(i) {
    this.selectedBookings.splice(i,1);
  }  

  selectedCustomer: Customer = {
    panNo:'',
    caddress:'',
    gstin:'',
    name:'',
    applicableTaxes: 0,
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
    this.totalPrice = 0;
    //taxable row calculation
    this.totalTaxablePrice = 0;
    this.totalNonTaxablePrice = 0;
    this.invoice.taxAmount = 0;
    this.selectedBookings.forEach(element => {
      this.totalTaxablePrice = this.totalTaxablePrice+Number(element.visaCost);
    });  
    if(this.isDiscounted==true) {
      if(this.invoice.discountType=="Hire") {
        this.invoice.discountAmount=this.invoice.discountRate/100*this.totalTaxablePrice;
      }
    }

    this.invoiceForms.controls.forEach(element => {
      if(element.value.taxable) {
      this.totalTaxablePrice += element.value.amount
      }
      else if(!element.value.taxable) {
      this.totalNonTaxablePrice += element.value.amount
      }
    });
    if(this.isDiscounted)
      this.calculateDiscount();
    this.invoice.taxAmount=((Number(this.invoice.taxRate)/100)*Number(this.totalTaxablePrice));
    this.invoice.taxAmount = (Math.round(this.invoice.taxAmount*100)/100);
    this.totalTaxablePriceAfterTax=Number(this.totalTaxablePrice)+Number(this.invoice.taxAmount);
    this.totalPrice=Number(this.totalTaxablePriceAfterTax)+Number(this.totalNonTaxablePrice);
    console.log((Math.ceil(this.totalPrice)-this.totalPrice))
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
    this.invoice.invoiceNumber = this.newInvoiceNumber;
    this.invoice.customerId=this.selectedCustomer.id;
    this.invoice.totalAmount=this.totalPrice;
    this.invoice.taxableAmount = this.totalTaxablePrice;
    this.invoice.nonTaxableAmount = this.totalNonTaxablePrice;
    var temp = {
      invoice:this.invoice,
      booking:this.selectedBookings,      
      extra:extra
    }
    console.log(temp)
    this.invoiceService.addInvoiceVisa(temp).subscribe(data=>{},err=>{},()=>{
      this.snackBar.open("Invoice Created", "X", {duration: 3000});
      this.router.navigateByUrl('/pages/masters/invoicedisplay');
    });
  }

  isDiscount() {
    this.isDiscounted =! this.isDiscounted;
    this.calculateTotal();
  }

  calculateDiscount() {
    if(this.isDiscounted==true) {
      if(this.invoice.discountType=="Amount") {
        this.invoice.discountAmount=Number(this.invoice.discountRate);
      }
      else if(this.invoice.discountType=="Percent") {
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
    invoicePeriodFrom:new Date().toISOString().split('T')[0],
    invoicePeriodTo:new Date().toISOString().split('T')[0],
    PONumber:'',
    CCNumber:'',
    discountType:'',
    discountRate:0,
    discountAmount:0,
    taxType:'',
    taxRate:0,
    taxAmount:0,
    totalAmount:0,
    advanceReceived: 0,
    taxableAmount: 0,
    nonTaxableAmount: 0,
  }

}
