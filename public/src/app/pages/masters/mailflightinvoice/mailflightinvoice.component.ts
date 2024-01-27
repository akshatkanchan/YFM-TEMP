import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { InvoiceService } from '../createinvoice/invoice.service';
import { Http } from '@angular/http';
import { FileuploadService } from '../../../fileupload.service';
import { MatSnackBar } from '@angular/material';
import { CustomerService } from '../customer/customer.service';
import * as moment from 'moment'
import { FlightDetails } from '../../airline/bookairline/bookairline.component';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as converter from 'number-to-words';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';

@Component({
  selector: 'mailflightinvoice',
  templateUrl: './mailflightinvoice.component.html',
  styleUrls: ['./mailflightinvoice.component.scss']
})
export class MailflightinvoiceComponent implements OnInit {

  totalInWords:any='';
  companyLogo:any='';
  flightDetails:FlightDetails;
  user:User={}  
  invoiceId:any;
  selectedExtras=[]
  extras: any[]=[];  
  bookedBy = {
    name: '',
    email: '',
  }
  mailBody: any;
  mailSubject: any;
  invoiceNumber: any;
  customerDetails: any={};
  customEmail: string = '';
  customer: boolean = true;
  bookBy: boolean = false;
  singleMail: boolean = false;
  emailAddresses: any[] = [];
  ccEmailAddresses: any[] = [];
  imgUrl: any[] =[];
  bookings: FlightBookings[]=[];
  businessSettings : BusinessSettings = {}
  companyProfile: CompanyProfile = {};
  bankAccount:BankAccount={};
  invoiceDetails :any ={}
  

  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private dialog: MatDialog,
    private auth:AuthService,
    private invoiceService: InvoiceService,
    private http: Http,
    private snackBar: MatSnackBar,
    private _sanitizer : DomSanitizer,
    private companyProfileService: CompanyprofileService,
    private bankAccountService:BankAccountService,
    private customerService:CustomerService,
    private uploadService:FileuploadService
  ) {
    // console.log(data);
    this.invoiceDetails = data;
    this.invoiceDetails.invoiceDate = moment(this.invoiceDetails.invoiceDate).format("YYYY-MM-DD");
    if(this.invoiceDetails.invoicePeriodFrom != '') {
      this.invoiceDetails.invoicePeriodFrom = moment(this.invoiceDetails.invoicePeriodFrom).format("YYYY-MM-DD");
    }
    if(this.invoiceDetails.invoicePeriodTo != '') {
      this.invoiceDetails.invoicePeriodTo = moment(this.invoiceDetails.invoicePeriodTo).format("YYYY-MM-DD");
    }
    this.invoiceId = data.id;
    this.totalInWords = converter.toWords(this.invoiceDetails.totalAmount)
    this.invoiceNumber = data.invoiceNumber;
    // this.customerId=data.temp.customer
    // this.checkedBookings = data.temp.bookings
    // this.selectedBookings = this.checkedBookings
    console.log(this.invoiceDetails);
    
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      var temp = {
        id: this.invoiceId
      }

      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0]
        this.uploadService.getPresignedUrl(this.user.companyName, this.companyProfile.companyLogo, 'profileImages').subscribe(data => {
          this.companyLogo = data._body
        })
        // this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
        //   this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
        //   + data.text());
        // })

      })

      this.bankAccountService.getBankAccount(this.user).subscribe(data=>{
        console.log(data)
        this.bankAccount=data[0]
      })

      this.invoiceService.getFlightsInInvoice(temp).subscribe(data => {
        console.log(data)  
        this.flightDetails=data             
        data.forEach(element => {
          this.bookings.push(
            {
              id:  element.id,
              bookedBy: element.bookByName,
              departureDate: moment(element.startDate).format("YYYY-mm-DD")
            }
          )
          console.log(this.bookings)          
        });
        this.bookedBy.name = data[0].bookBy;
        this.bookedBy.email = data[0].bookByEmail;
        this.customerService.getSingleCustomer(data[0]).subscribe(data => {
          console.log(data)
          this.customerDetails=data[0]
        })  
      })
      
    })

    this.auth.businessSettings.subscribe(data => {
      this.businessSettings = data;
    }) 

  }  
  
  mailDocs(element, event) {
    const index: number = this.selectedExtras.indexOf(element);
    if(event.checked) {
      this.selectedExtras.push(element);
      console.log(this.selectedExtras, index)
    }
    else {
      this.selectedExtras.splice(index, 1)
      console.log(this.selectedExtras, index)
    }
  }

  

  closeDialog(){
    this.dialog.closeAll()
  }

  sendMail(div1: HTMLDivElement)
  {
    this.invoiceDetails.isMailed = true;
    
    
    if(this.selectedExtras.includes('Invoice'))
    {
      this.printInvoice();
    }

    if(this.customEmail != '' && !this.customEmail.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
      this.snackBar.open('Enter a valid Email',null,{
        duration:5000
      });        
    }
    else if(this.customEmail != '') {
      if(this.singleMail) {
        this.emailAddresses.push(this.customEmail)
      }
      else {
        this.ccEmailAddresses.push(this.customEmail)
      }        
              
      if(this.customer) {
        this.emailAddresses.push(this.customerDetails.email);
      }
      if(this.bookBy && this.singleMail) {
        this.emailAddresses.push(this.bookedBy.email);
      }
      else if(this.bookBy && !this.singleMail) {
        this.ccEmailAddresses.push(this.bookedBy.email);
      }
      console.log(this.emailAddresses, this.ccEmailAddresses)
      
      this.mailSubject = "Invoice #"+this.invoiceNumber+" for your trip has been generated";
      this.mailBody = div1.innerHTML
      var temp = {
        companyEmail: this.companyProfile.email,
        name: this.companyProfile.name,
        email: this.emailAddresses,
        cc: this.ccEmailAddresses,
        subject: this.mailSubject,
        mailBody:this.mailBody,
      } 
      this.invoiceService.updateFlightInvoice(this.invoiceDetails).subscribe();
      console.log(temp)
      this.http.post('/Voip/sendMail',temp).subscribe(data=>{
        console.log(data)      
      })
      this.snackBar.open('Mail Sent',null,{
        duration:5000
      });
      this.dialog.closeAll();
    }
  }

  attachments=[]
  async printInvoice() {
    let data = document.getElementById('demo').innerHTML;
    let pdfData=data;

    await this.uploadService.generateInvoicePDF(pdfData,this.invoiceId+"_Invoice_"+moment().format("DD-MM-YYYY"),"flightInvoice",this.user,this.companyProfile,this.bankAccount)

    this.attachments.push({fileName:"Invoice_"+moment().format("DD-MM-YYYY"),path:this.invoiceId+"_Invoice_"+moment().format("DD-MM-YYYY")+".pdf"})
    }

}

export interface FlightBookings {
  id: string,
  bookedBy: string,
  departureDate: string,
}