import { Component, OnInit } from '@angular/core';
import { Invoice } from '../createinvoice/invoice';
import { Customer } from '../customer';
import { User } from '../../../core/user';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import { AuthService } from '../../../core/auth.service';
import { CustomerService } from '../customer/customer.service';
import { InvoiceService } from '../createinvoice/invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as converter from 'number-to-words';
import { SubUser } from '../sub-users/sub-user';
import * as moment from 'moment';
import {saveAs} from 'file-saver';

@Component({
  selector: 'viewvisainvoice',
  templateUrl: './viewvisainvoice.component.html',
  styleUrls: ['./viewvisainvoice.component.scss']
})
export class ViewvisainvoiceComponent implements OnInit {

  totalInWords:any='';
  companyLogo:any=''
  customerDetails:Customer={};
  selectedBookings=[];
  user:User ={};
  permission:SubUser={};
  dutySummary = []
  businessSettings: BusinessSettings = {};    
  companyProfile: CompanyProfile = {};
  bankAccount:BankAccount={};
  
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
  ) {
    
   }

  ngOnInit() {
    this.auth.permissions.subscribe(data =>{
      this.permission=data[0]
    })

    var iData = localStorage.getItem('visaInvoice')
    this.invoiceDetails = JSON.parse(iData)
    this.invoiceDetails.invoiceDate = moment(this.invoiceDetails.invoiceDate).format("YYYY-MM-DD");
    console.log(this.invoiceDetails);
    if(this.invoiceDetails==undefined)
    {
      this.router.navigate(['/pages/masters/invoicedisplay'])
    }

    this.totalInWords = converter.toWords(this.invoiceDetails.totalAmount)

    this.auth.user.subscribe(data=>{
      this.user=data[0]

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
                                
      this.invoiceService.getVisaInInvoice(this.invoiceDetails).subscribe(data=>{
        this.selectedBookings=data
        console.log(data)
      })
      this.customerService.getSingleCustomer(this.invoiceDetails).subscribe(data=>{
        console.log(data)
        this.customerDetails=data[0]
      })

      this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
        console.log(data)
        this.bankAccount=data[0]
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

  print() {
    this.invoiceDetails.isPrinted = true;
    let data = document.getElementById('demo').innerHTML;        
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
            <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
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

  downloadInvoice() {
    let data = document.getElementById('demo').innerHTML;
    let pdfData=data;
    this.invoiceDetails.isDownloaded = true;
    this.uploadService.downloadPDF(pdfData,this.invoiceDetails.id+"_Invoice_"+moment().format("DD-MM-YYYY"),"visaInvoice",this.user,this.companyProfile,this.bankAccount).subscribe(data=>saveAs(data,this.invoiceDetails.id+"_Invoice_"+moment().format("DD-MM-YYYY")),err=>console.log(err),()=>{      
      this.invoiceService.updateInvoice(this.invoiceDetails).subscribe()
    });
  }

}
