import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Customer } from '../customer';
import { User } from '../../../core/user';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../core/auth.service';
import { InvoiceService } from '../createinvoice/invoice.service';
import { CustomerService } from '../customer/customer.service';
import { Invoice } from '../createinvoice/invoice';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { Router } from '@angular/router';
import * as converter from 'number-to-words';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import * as moment from 'moment';
import {saveAs} from 'file-saver';
import { InvoiceattachmentmodalComponent } from '../invoiceattachmentmodal/invoiceattachmentmodal.component';

@Component({
  selector: 'viewpurchaseinvoice',
  templateUrl: './viewpurchaseinvoice.component.html',
  styleUrls: ['./viewpurchaseinvoice.component.scss']
})
export class ViewpurchaseinvoiceComponent implements OnInit {

  customerDetails:Customer={};
  selectedBookings=[];
  user:User;
  dutySummary = [];
  businessSettings : BusinessSettings = {};
  totalInWords:any='';
  companyProfile: CompanyProfile = {};
  companyLogo:any='';
  bankAccount:BankAccount={};
  extraCharges=[];
  dutyIds = [];
  extras=[];

  @ViewChild('demo2') demo2: ElementRef;
  @ViewChild('demo') demo: ElementRef;

  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private auth:AuthService,
    private customerService:CustomerService,
    private invoiceService:InvoiceService,
    private dialog: MatDialog,
    private router:Router,
    private bankAccountService:BankAccountService,
    private companyProfileService: CompanyprofileService,
    private uploadService:FileuploadService,
    private _sanitizer:DomSanitizer,    
  ) {
    

    
  }

  ngOnInit() {
    var iData = localStorage.getItem('purchaseinvoice');
    this.invoiceDetails = JSON.parse(iData);
    this.invoiceDetails.invoiceDate = moment(this.invoiceDetails.invoiceDate).format("YYYY-MM-DD");
    if(this.invoiceDetails==undefined)
    {
      this.router.navigate(['/pages/masters/purchase-invoice']);
    }

    this.totalInWords = converter.toWords(this.invoiceDetails.totalAmount)

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

      });

      this.customerService.getSingleCustomer(this.invoiceDetails).subscribe(data => {
        this.customerDetails=data[0]
        console.log(this.customerDetails)
      })
      
      this.invoiceService.getPurchaseInInvoice(this.invoiceDetails).subscribe(data => {
        if(data != undefined) {
          this.selectedBookings=data
          console.log(this.selectedBookings)
          this.selectedBookings.forEach(element => {
            if(element.dutyId != null) {
              this.dutyIds.push(element.id);
            }
          })
          console.log(this.selectedBookings);
          if(this.dutyIds.length > 0) {
            this.invoiceService.getExtraCharges({idArray:this.dutyIds}).subscribe(data => {
              console.log(data);
              this.extras = data;
              for(var v in this.selectedBookings) {
                console.log(v);
                
                for(var e in this.extras) {
                  console.log(e);
                  
                  if(this.extras[e].dutyId == this.selectedBookings[v].id) {
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
        }          
      })
      this.invoiceService.getPurchaseInInvoiceByBooking(this.invoiceDetails).subscribe(data => {
        if(data != undefined) {
          this.selectedBookings=data
          console.log(this.selectedBookings)
        }        
      })
      this.invoiceService.getInvoiceExtras(this.invoiceDetails).subscribe(data => {
        console.log(data)
      })      
      this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
        this.bankAccount=data[0]
      })
      this.invoiceService.getDutySummaryForPurchase(this.invoiceDetails).subscribe(data => {
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
          console.log(element.totalKm)
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
  }

  print() {
    // let data = document.getElementById('demo').innerHTML;
    let data = this.demo.nativeElement.innerHTML;      
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    newWindow.document.open();
    newWindow.document.write(`
    <html>
      <head>        
        <style>          
          body {
            font-family: "Roboto" !important;
            font-size: 11px !important;
          }
          table {      
            boreder-collapse: collapse;
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
    let data = document.getElementById('demo').innerHTML;
    let pdfData=data;
    this.invoiceDetails.isDownloaded = true;
    this.uploadService.downloadPDF(pdfData,this.invoiceDetails.id+"_Invoice_"+moment().format("DD-MM-YYYY"),"cabInvoice",this.user,this.companyProfile,this.bankAccount).subscribe(data=>saveAs(data,this.invoiceDetails.id+"_Invoice_"+moment().format("DD-MM-YYYY")),err=>console.log(err),()=>{      
      this.invoiceService.updateInvoice(this.invoiceDetails).subscribe()
    });
  }

  downloadDutySummary() {
    let data2 = document.getElementById('demo2').innerHTML;        
    let pdfData2=data2;
    this.invoiceDetails.isDownloaded = true;
    this.uploadService.downloadPDF(pdfData2,this.invoiceDetails.id+"_DutySummary_"+moment().format("DD-MM-YYYY"),"dutySummary",this.user,this.companyProfile,this.bankAccount).subscribe(data=>saveAs(data,this.invoiceDetails.id+"_DutySummary_"+moment().format("DD-MM-YYYY")),err=>console.log(err),()=>{
      
      this.invoiceService.updateInvoice(this.invoiceDetails).subscribe()
    });
  }

}
