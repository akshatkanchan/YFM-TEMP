import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Invoice } from '../createinvoice/invoice';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer';
import { InvoiceService } from '../createinvoice/invoice.service';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import * as moment from 'moment'
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as converter from 'number-to-words';
import { Router } from '@angular/router';
import { SubUser } from '../sub-users/sub-user';
import {saveAs} from 'file-saver';
import { InvoiceattachmentmodalComponent } from '../invoiceattachmentmodal/invoiceattachmentmodal.component';

@Component({
  selector: 'viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.scss']
})
export class ViewinvoiceComponent implements OnInit {

  totalInWords:any='';
  netTotalInWords:any='';
  companyLogo:any=''
  customerDetails:Customer={};
  selectedBookings=[];
  dutySummary=[];
  extraCharges=[];
  user:User;
  permission:SubUser={};
  businessSettings: BusinessSettings = {};    
  companyProfile: CompanyProfile = {};
  bankAccount:BankAccount={};
  printI: boolean = false;
  printD: boolean = false;
  bookingIds = [];
  extras=[];

  @ViewChild('demo2') demo2: ElementRef;
  @ViewChild('demo') demo: ElementRef;

  constructor(    
    private auth:AuthService,
    private customerService:CustomerService,
    private invoiceService:InvoiceService,
    private dialog: MatDialog,
    private companyProfileService: CompanyprofileService,
    private bankAccountService:BankAccountService,
    private uploadService:FileuploadService,
    private _sanitizer:DomSanitizer,
    private router:Router
  ) { }

  ngOnInit() {
    this.auth.permissions.subscribe(data=>{
      this.permission=data[0]
    })
    var iData = localStorage.getItem('cabInvoice');
    this.invoiceDetails = JSON.parse(iData);
    this.invoiceDetails.invoiceDate = moment(this.invoiceDetails.invoiceDate).format("YYYY-MM-DD");
    if(this.invoiceDetails==undefined)
    {
      this.router.navigate(['/pages/masters/invoicedisplay'])
    }

    
    this.totalInWords = converter.toWords(this.invoiceDetails.totalAmount)
    this.netTotalInWords = converter.toWords((this.invoiceDetails.totalAmount - this.invoiceDetails.advanceReceived))

    this.auth.user.subscribe(data => {
      this.user = data[0]

      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0]

        this.uploadService.getPresignedUrl(this.user.companyName,this.companyProfile.companyLogo, 'profileImages').subscribe(data => {
          this.companyLogo = data._body
          console.log(this.companyLogo);
          
        })
        // this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
        //   this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
        //   + data.text());
        // })

      })

      this.customerService.getSingleCustomer(this.invoiceDetails).subscribe(data => {
        this.customerDetails=data[0]
      })
      this.invoiceService.getBookingsInInvoice(this.invoiceDetails).subscribe(data => {
        console.log(data);        
        this.selectedBookings=data
        this.selectedBookings.forEach(element => {
          this.bookingIds.push(element.id);        
        })
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
      })
      // this.invoiceService.getInvoiceExtras(this.invoiceDetails).subscribe(data => {
      //   console.log(data)
      // })
      this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
        this.bankAccount=data[0]
      })
      // this.invoiceService.getHotelsInInvoice(this.invoiceDetails).subscribe(data => {

      // })
      // this.invoiceService.getFlightsInInvoice(this.invoiceDetails).subscribe(data=>{
          
      // })
      this.invoiceService.getDutySummary(this.invoiceDetails).subscribe(data => {
        console.log(data)
        this.dutySummary = data;
        this.dutySummary.forEach(element => {
          element.charges=0;
          var temp= {
            id: element.bid
          }
          this.invoiceService.getCloseExtras(temp).subscribe(data => {
            this.extraCharges=data;
            console.log(data)
          })
          this.extraCharges.forEach(data => {
            console.log(data)
            if(element.dutyId == data.dutyId) {
              element.charges+=data.charges;
            }
          })
          var startTime = moment(element.startDate+" "+element.startTime, "YYYY-MM-DD HH:mm a");
          var endTime = moment(element.endDate+" "+element.endTime,"YYYY-MM-DD HH:mm a");

          element.endTime= moment(element.endTime, "HH:mm a");;
          element.startTime=moment(element.startTime, "HH:mm a");

          var totalHrs = endTime.diff(startTime,'hours')
          var totalMins = endTime.diff(startTime,'minutes');

          var clearMins = totalMins % 60;

          element.totalTime = totalHrs+"hrs "+clearMins+"mins"
          
          element.totalKm = element.endKm - element.startKm;
          if(element.maxHrs == '' || totalHrs < element.maxHrs) {
            element.extraTime = 0;
          }
          else {
            element.extraTime =(totalHrs-element.maxHrs)+"hrs "+clearMins+"mins"
          }
          if(element.maxKms == '') {
            element.extraKm = 0;
          }
          else {
            element.extraKm = element.totalKms - element.maxKms;
          }
          console.log(element.totalTime);
        })
        console.log(this.dutySummary);
      })
    })
    this.auth.businessSettings.subscribe(data => {
      this.businessSettings = data;
    })        
  }
  
  closeDialog() {
    this.dialog.closeAll();
  }

  invoiceDetails:Invoice={
    id:'',
    invoiceNumber:'',
    invoiceDate:'',
    invoicePeriodFrom:'',
    invoicePeriodTo:'',
    PONumber:'',
    CCNumber:'',
    totalAmount:null,
    taxType:'',
    taxAmount:null,
    discountType:'',
    discountRate:null,
    discountAmount:null,
    customerId:'',
    isDownloaded: false,
    isPrinted: false,
    isMailed: false,
  }

  printBoth() {
    let data = document.getElementById('demo').innerHTML;  
    let data2 = document.getElementById('demo2').innerHTML;
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    console.log(data, data2);
    
    newWindow.document.open();
    newWindow.document.write(`
    <html>
      <head>        
        <style media="print">      
          body {
            font-family: "Roboto" !important;
            font-size: 11px !important;
          }
          table {      
            border-collapse: collapse;
            font-size: 11px !important;
          }
          th {
            text-align: center
          }        
          .box2 {
            display: flex;
            flex-direction: row;
            border-bottom: 0.1px solid;
            border-bottom-color: darkgrey;
          }        
          .vl {
            border-right: 0.1px solid;
            border-right-color: darkgrey;
          }
          .tdleft {
            text-align: left;
          }
          .tdright {
            text-align: right;
            align-content: right;
            place-content: right;
            border-top:1px solid darkgrey !important;
          }
          .trcenter {
            text-align: center;
          }        
          .invoiceTable td {
            border-top:1px solid darkgrey !important;            
          }
          .iTbl td {
            padding-top:5px !important;
            border-top:1px solid darkgrey !important;            
          }
          @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
          @media print {
            @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
            html
            {
                margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
            }
            .footer {
              padding-top: 25px;
              page-break-before: auto;
              page-break-inside: avoid;
              width: 100%;
              color: white;
              text-align: center;
           }
          }
        </style>
      </head>
      <body onload="window.print();window.close()">
      <div>
        ${data}      
        <div class="footer">
          <table style="width:100%">
            <tr>
              <td colspan="3">
                <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
                  No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
                <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${this.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${this.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${this.companyProfile.panNo} |</p><br>
            
                <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
                <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${this.bankAccount.number} <b>Bank Name:</b> ${this.bankAccount.bankName} </p>
                <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${this.bankAccount.branch} <b>IFSC Code:</b> ${this.bankAccount.ifscCode}</p>
                <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${this.bankAccount.chequeInTheNameOf}</p>
            
              </td>
              <td colspan="2" style="text-align: right">
                <p style="margin-top: -5px;font-size:12px; margin-bottom:0px">
                  <b>For ${this.user.companyName}</b>
                  <br><br><br><br><br>
                  Authorized signatory
                </p>
              </td>
             </tr>
          </table>
        </div>
      </div>
      <div>
        ${data2}
      </div>
    </body>
  </html>`);
    newWindow.document.close();
  }

  printDutySummary() {
    this.invoiceDetails.isPrinted = true;
    // let data2 = document.getElementById('demo2').innerHTML;
    console.log(this.demo2);
    
    let data2 = this.demo2.nativeElement.innerHTML;
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    newWindow.document.open();
    newWindow.document.write(
      `<html>
        <head>
          <style media="print">  
          @media print{
            @page {
              size: landscape;
              margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
            html
            {
                margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
            }
          }   
        </style>
        </head>
        <body onload="window.print();window.close()">${data2}</body>
      </html>`);
      newWindow.document.close();
      this.invoiceService.updateInvoice(this.invoiceDetails).subscribe();
  }

  print() {
    this.invoiceDetails.isPrinted = true;
    // let data = document.getElementById('demo').innerHTML;  
    let data = this.demo.nativeElement.innerHTML;      
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    newWindow.document.open();
    newWindow.document.write(`
    <html>
      <head>        
        <style media="print">      
          body {
            font-family: "Roboto" !important;
            font-size: 11px !important;
          }
          table {      
            border-collapse: collapse;
            font-size: 11px !important;
          }
          th {
            text-align: center
          }        
          .box2 {
            display: flex;
            flex-direction: row;
            border-bottom: 0.1px solid;
            border-bottom-color: darkgrey;
          }        
          .vl {
            border-right: 0.1px solid;
            border-right-color: darkgrey;
          }
          .tdleft {
            text-align: left;
          }
          .tdright {
            text-align: right;
            align-content: right;
            place-content: right;
            border-top:1px solid darkgrey !important;
          }
          .trcenter {
            text-align: center;
          }        
          .invoiceTable td {
            border-top:1px solid darkgrey !important;            
          }
          .iTbl td {
            padding-top:5px !important;
            border-top:1px solid darkgrey !important;            
          }
          @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
          @media print {
            @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
            html
            {
                margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
            }
            .footer {
              padding-top: 25px;
              page-break-before: auto;
              page-break-inside: avoid;
              width: 100%;
              color: white;
              text-align: center;
           }
          }
        </style>
      </head>
      <body onload="window.print();window.close()">${data}
      
      <div class="footer">
      <table style="width:100%">
      <tr>
          <td colspan="3">
            <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
            No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
            <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${this.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${this.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${this.companyProfile.panNo} |</p><br>
            
              <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
              <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${this.bankAccount.number} <b>Bank Name:</b> ${this.bankAccount.bankName} </p>
              <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${this.bankAccount.branch} <b>IFSC Code:</b> ${this.bankAccount.ifscCode}</p>
              <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${this.bankAccount.chequeInTheNameOf}</p>
            
          </td>
          <td colspan="2" style="text-align: right">
            <p style="margin-top: -5px;font-size:12px; margin-bottom:0px">
              <b>For ${this.user.companyName}</b>
              <br><br><br><br><br>
              Authorized signatory
            </p>
          </td>
        </tr>
      </table>
      </div>
      </body>

    </html>`);
    newWindow.document.close();
    this.invoiceService.updateInvoice(this.invoiceDetails).subscribe(data=>{});
  }

  printDocs() {
    this.dialog.open(InvoiceattachmentmodalComponent, {autoFocus: false, disableClose: true}).afterClosed().subscribe(data => {
      console.log(data);
      if(data == undefined){}
      
      if(data.invoice == true) {
        this.print();
      }
      if(data.dutySummary == true) {
        this.printDutySummary();
      }
    })    
  }

  downloadDocs() {
    this.dialog.open(InvoiceattachmentmodalComponent, {autoFocus: false, disableClose: true}).afterClosed().subscribe(data => {
      console.log(data);
      if(data == undefined){}
      
      if(data.invoice == true) {
        this.downloadInvoice();
      }
      if(data.dutySummary == true) {
        this.downloadDutySummary();
      }
    })    
  }

  downloadInvoice() {
    let data = this.demo.nativeElement.innerHTML;
    // let data = document.getElementById('demo').innerHTML;
    let pdfData=data;
    this.invoiceDetails.isDownloaded = true;
    this.uploadService.downloadPDF(pdfData,this.invoiceDetails.id+"_Invoice_"+moment().format("DD-MM-YYYY"),"cabInvoice",this.user,this.companyProfile,this.bankAccount).subscribe(data=>saveAs(data,this.invoiceDetails.id+"_Invoice_"+moment().format("DD-MM-YYYY")),err=>console.log(err),()=>{      
      this.invoiceService.updateInvoice(this.invoiceDetails).subscribe()
    });
  }

  downloadDutySummary() {
    let data2 = this.demo2.nativeElement.innerHTML;
    // let data2 = document.getElementById('demo2').innerHTML;     
    let pdfData2=data2;
    this.invoiceDetails.isDownloaded = true;
    this.uploadService.downloadPDF(pdfData2,this.invoiceDetails.id+"_DutySummary_"+moment().format("DD-MM-YYYY"),"dutySummary",this.user,this.companyProfile,this.bankAccount).subscribe(data=>saveAs(data,this.invoiceDetails.id+"_DutySummary_"+moment().format("DD-MM-YYYY")),err=>console.log(err),()=>{
      
      this.invoiceService.updateInvoice(this.invoiceDetails).subscribe()
    });
  }

  printDoc() {
    if(this.printI && this.printD) {
      let data = document.getElementById('demo').innerHTML;
      let data2 = document.getElementById('demo2').innerHTML;
      let pdfData=data;
      let pdfData2=data2;
      this.uploadService.downloadPDF(pdfData,this.invoiceDetails.id+"_Invoice_"+moment().format("DD-MM-YYYY"),"cabInvoice",this.user,this.companyProfile,this.bankAccount)
      this.uploadService.downloadPDF(pdfData2,this.invoiceDetails.id+"_DutySummary_"+moment().format("DD-MM-YYYY"),"dutySummary",this.user,this.companyProfile,this.bankAccount)
    }
    else if(this.printD == true) {
      
    }
    else if(this.printI == true) {
      
    
    }
  }
}
