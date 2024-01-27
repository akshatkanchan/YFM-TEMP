import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { FormBuilder,FormGroup,FormArray, FormControl} from '@angular/forms';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA} from '@angular/material';
import { CustomerselectionComponent} from '../customerselection/customerselection.component';
import { Customer } from '../customer';
import { BookingdispinvoiceComponent } from '../bookingdispinvoice/bookingdispinvoice.component';
import { Booking } from '../../operations/booking';
import { Invoice } from './invoice';
import { InvoiceService } from './invoice.service';
import { AuthService } from '../../../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from '../../operations/bookings.service';
import { CustomerService } from '../customer/customer.service';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { DutiesService } from '../../duties/duties.service';
import { User } from '../../../core/user';
import * as moment from 'moment';


@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.scss']
})
export class CreateinvoiceComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  myForm:FormGroup;
  taxForm:FormGroup;
  selectedBookings:any=[];
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
  
  user: User = {};
  totalTaxablePrice:number=0;
  totalNonTaxablePrice:number=0;
  totalTaxablePriceAfterTax:number=0;
  totalPrice:number=0;
  bookingData:any=null;
  tax:any[]=[];
  bookingIds = [];
  extras=[];

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
    private dutyService:DutiesService
  ) { }

  custTax : string ="";

  ngOnInit() {
    
    this.auth.user.subscribe(data=>{
      this.user = data[0];
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
            // console.log(data[0].invoicePrefix)
            this.prefix = data[0].invoicePrefix;
          }
          
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
      var dialTemp = this.dialog.open(BookingdispinvoiceComponent, {autoFocus:false,disableClose:true, data: {temp}});
      dialTemp.afterClosed().subscribe(data => {         
        if(data) {
          this.selectedBookings = data
          console.log(this.selectedBookings[0])
          this.selectedBookings.forEach(element => {
            this.bookingIds.push(element.id);
            if(element.advance != null) {
              this.advanceReceived += element.advance;
            }
          })
          console.log(this.selectedBookings)
          this.invoice.advanceReceived = this.advanceReceived;
          if(this.selectedBookings.length > 0) {
            this.invoiceService.getExtraCharges({idArray:this.bookingIds}).subscribe(data => {
              console.log(data);
              this.extras = data;
              for(var v in this.selectedBookings) {
                console.log(v);
                
                for(var e in this.extras) {
                  console.log(e);
                  
                  if(this.extras[e].bookyId == this.selectedBookings[v].id) {
                    if(this.selectedBookings[v].extras == undefined) {
                      this.selectedBookings[v].extras = [{name: this.extras[e].name, charges: this.extras[e].charges}]
                    }
                    else {
                      this.selectedBookings[v].extras.push({name: this.extras[e].name, charges: this.extras[e].charges})
                    }                    
                  }
                }              
              }
            });
          }
          // this.additionalCharges.length = 0;                    
          // this.selectedBookings.forEach(element => {
          //   this.additionalCharge = 0;
          //   this.invoiceService.getCloseExtras(element).subscribe(data => {
          //     data.forEach(element => {
          //       this.additionalCharge+= Number(element.charges);
          //       this.additionalChargeQty=Number(this.additionalChargeQty)+1;
          //     });
          //     this.additionalCharges.push(this.additionalCharge);            
          //     console.log(this.additionalCharges, this.additionalCharge)
          //     console.log(data);
          //   })            
          // })
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
        if(cTax !=undefined)
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

  deleteExtra(e,i) {
    console.log(this.selectedBookings, i , e);
    
    this.selectedBookings[i].extraChargesTotal = Number(this.selectedBookings[i].extraChargesTotal)-Number(this.selectedBookings[i].extras[e].charges)
    this.selectedBookings[i].extras.splice(i,1);
    this.calculateTotal();
  }

  selectedCustomer: Customer = {
    panNo:'',
    caddress:'',
    gstin:'',
    name:'',
    applicableTaxes: 0,
    customerOwnerId:''
  };



  getTax(option1, option2: number, event: any) {
    if(event.source.selected == true) {
      this.invoice.taxType = option1;
      this.invoice.taxRate = option2;
      this.calculateTotal()
    }
    
    // if(option==1)
    // {
    //   this.invoice.taxType="CGST+SGST";
    // }
    // else if(option==2)
    // {
    //    this.invoice.taxType="IGST";
    // }
    // this.invoiceService.getTax(this.invoice.taxType).subscribe(data=>{
    //   this.invoice.taxRate=data[0].percent;
    //   this.calculateTotal();
    // });

  }
  calculateCharges(element){
    element.get('amount').setValue(element.value.rate*element.value.quantity)
  
    this.calculateTotal()
  // this.getTax(1);
  }

  calculateTotal() {
    this.totalPrice = 0;
    //taxable row calculation
    this.totalTaxablePrice = 0;
    this.totalNonTaxablePrice = 0;
    this.invoice.taxAmount = 0;
    this.selectedBookings.forEach(element => {
      console.log(element);
      this.totalTaxablePrice = this.totalTaxablePrice+Number(element.totsPrice)+Number(element.extraChargesTotal);
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
    this.invoice.taxAmount=(Number(this.invoice.taxRate)/100)*Number(this.totalTaxablePrice);
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
    this.invoice.invoicePeriodFrom=moment(this.invoice.invoicePeriodFrom).format('YYYY-MM-DD');
    this.invoice.invoicePeriodTo=moment(this.invoice.invoicePeriodTo).format('YYYY-MM-DD');
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
    this.invoiceService.addInvoice(temp).subscribe(data=>{
      this.selectedBookings.forEach(element => {
        this.dutyService.getDutyByBId(element).subscribe(data=>{
          console.log(data);
          if(data[0].ownerDId != null) {
            var temp = {
              id:data[0].ownerDId
            }
            this.dutyService.getDutyById(temp).subscribe(data=>{
              console.log(data);
              this.invoice.ownerId=data[0].ownerId
              var cid = {
                cownerId: this.user.ownerId,
                ownerId: this.invoice.ownerId
              }
              console.log(cid);
              
              this.customerService.getCustomerId(cid).subscribe(data => {
                console.log(data);
                
                this.invoice.customerId = data[0].id;
                var temp2 = {
                  invoice:this.invoice,
                  booking:[element],
                  extra:extra,
                  duty: null,
                  name:this.user.name,
                  ownerId:data[0].customerOwnerId
                }
                this.invoiceService.addInvoicePurchase(temp2).subscribe(data=>{
                  console.log(data);
                })
              })                            
            })
          }
        })
      })
    },err=>{},()=>{
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
