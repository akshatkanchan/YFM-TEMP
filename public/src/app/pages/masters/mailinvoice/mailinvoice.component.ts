import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { InvoiceService } from '../createinvoice/invoice.service';
import { Http } from '@angular/http';
import { FileuploadService } from '../../../fileupload.service';
import { CustomerService } from '../customer/customer.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment'
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { BankAccount } from '../../operations/new-bank-account/bank-account';
import * as converter from 'number-to-words';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { BankAccountService } from '../../operations/new-bank-account/bank-account.service';

@Component({
  selector: 'mailinvoice',
  templateUrl: './mailinvoice.component.html',
  styleUrls: ['./mailinvoice.component.scss']
})
export class MailinvoiceComponent implements OnInit {

  totalInWords:any='';
  companyLogo:any=''
  dutySummary=[];
  extraCharges=[];
  businessSettings: BusinessSettings = {};  
  invoiceDetails :any ={}
  selectedBookings=[];
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
  invoiceNumber: string;
  customerDetails: any={};
  customEmail: string = '';
  customer: boolean = true;
  bookBy: boolean = false;
  singleMail: boolean = false;
  emailAddresses: any[] = [];
  ccEmailAddresses: any[] = [];
  imgUrl: any[] =[];
  bookings:any = []
  companyProfile: CompanyProfile = {};
  bankAccount:BankAccount={};
  bookingIds = [];
  extras2=[];

  constructor(
    private auth:AuthService,
    @Inject (MAT_DIALOG_DATA) public data,
    private dialog:MatDialog,
    private invoiceService: InvoiceService,
    private http:Http,
    private uploadService : FileuploadService,
    private customerService:CustomerService,
    private snackBar: MatSnackBar,
    private _sanitizer : DomSanitizer,
    private companyProfileService: CompanyprofileService,
    private bankAccountService:BankAccountService,
  ) {

    this.invoiceDetails = data;
    this.invoiceDetails.invoiceDate = moment(this.invoiceDetails.invoiceDate).format("YYYY-MM-DD");
    if(this.invoiceDetails.invoicePeriodFrom != '') {
      this.invoiceDetails.invoicePeriodFrom = moment(this.invoiceDetails.invoicePeriodFrom).format("YYYY-MM-DD");
    }
    if(this.invoiceDetails.invoicePeriodTo != '') {
      this.invoiceDetails.invoicePeriodTo = moment(this.invoiceDetails.invoicePeriodTo).format("YYYY-MM-DD");
    }
    this.totalInWords = converter.toWords(this.invoiceDetails.totalAmount)
    console.log(data);
    this.invoiceId = data.id;
    this.invoiceNumber = data.invoiceNumber;
    // this.customerId=data.temp.customer
    // this.checkedBookings = data.temp.bookings
    // this.selectedBookings = this.checkedBookings
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

      this.invoiceService.getBookingsInInvoice(temp).subscribe(data => {
        console.log(data)
        this.selectedBookings=data
        this.selectedBookings.forEach(element => {
          this.bookingIds.push(element.id);        
        })
        if(this.selectedBookings.length > 0) {
          this.invoiceService.getExtraCharges({idArray:this.bookingIds}).subscribe(data => {
            console.log(data);
            this.extras2 = data;
            for(var v in this.selectedBookings) {
              console.log(v);
              
              for(var e in this.extras2) {
                console.log(e);
                
                if(this.extras2[e].bookyId == this.selectedBookings[v].id) {
                  if(this.selectedBookings[v].extras == undefined) {
                    this.selectedBookings[v].extras = [{name: this.extras2[e].name, charges: this.extras2[e].charges}]
                  }
                  else {
                    this.selectedBookings[v].extras.push({name: this.extras2[e].name, charges: this.extras2[e].charges})
                  }                    
                }
              }              
            }
          });
        }
        this.customerService.getSingleCustomer(this.invoiceDetails).subscribe(data => {
          console.log(data)
          this.customerDetails=data[0]
        })

        if(data.length>0)
        {
          this.bookedBy.name = data[0].bookBy;
          this.bookedBy.email = data[0].bookByEmail; 
          
          var i =0;

          data.forEach(element => {
            console.log(element);
            this.bookings.push({id: element.id, dutyType: element.dutyType, bookedBy: element.bookBy, date: moment(element.startDate).format("YYYY-mm-DD")})
            console.log(this.bookings)
            
          });       
          
          data.forEach(element => {
            this.invoiceService.getCloseExtras(element).subscribe(data => {           
              

              data.forEach(element => {
                console.log(element);
                
              if(element.fileName!='' && element.fileName !=null)
              {
                this.extras.push(element)
                console.log(this.extras);
                
                this.uploadService.getFile(this.user.companyName,'closeDutyExtras',element.fileName).subscribe(data=>{
                
                  if(data)
                  this.imgUrl[i] = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                  + data.text());
                  
                  i=i+1;    
                })
              }
                          
            })
            })         
          });   
        }     
        
      })
      
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
          if(element.maxHrs == '') {
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

  imgFiles:any[]=[]
  
  mailDocs(element, event) {
    const index: number = this.selectedExtras.indexOf(element);
    if(event.checked) {
      this.selectedExtras.push(element)
      console.log(this.selectedExtras, index)
    }
    else {
      this.selectedExtras.splice(index, 1)
      console.log(this.selectedExtras, index)
    }
  }

  mailImages(element, event,i){

    var index : number = this.attachments.find(x=> x.fileName == element.name)

    if(event.checked) {

      var temp = 
      {
        image:this.imgUrl[i],
        fileName:element.fileName,
        title:element.name
      }

      this.imgFiles.push(temp)
      this.attachments.push({fileName:"Extras_"+moment().format("DD-MM-YYYY"),path:this.invoiceId+"_imageAttachments.pdf"})
      console.log(this.imgFiles)
    }
    else {
      this.attachments.splice(index,1);
      this.imgFiles.splice(i, 1)
      console.log(this.imgFiles)
    }
  }
  

  closeDialog(){
    this.dialog.closeAll()
  }

  attachments=[]
  async sendMail(div1: HTMLDivElement)
  {
    this.invoiceDetails.isMailed = true;
      if(this.selectedExtras.includes('Invoice'))
      {
        await this.printInvoice();
      }
      if(this.selectedExtras.includes('Duty Summary'))
      {
        await this.printDutySummary();
      }
      if(this.imgFiles.length>0)
      {
        this.uploadService.createImageAttachments(this.imgFiles,this.invoiceId)
      }

      if(this.customEmail != '' && !this.customEmail.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/)) {
        this.snackBar.open('Enter a valid Email',null,{
          duration:5000
        });
        return;
      }
      else if(this.customEmail != '') {
        if(this.singleMail) {
          this.emailAddresses.push(this.customEmail)
        }
        else {
          this.ccEmailAddresses.push(this.customEmail)
        }        
      }
    
    // else if(this.customEmail == '') {
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
        attachments:this.attachments,
        imgFiles:this.imgFiles
      } 
      this.invoiceService.updateInvoice(this.invoiceDetails).subscribe();
      this.snackBar.open('Generating attachments',null,{
        duration:5000
      });

      setTimeout(()=>{
        this.http.post('/Voip/sendMail',temp).subscribe(data=>{
          // console.log(data)      
        })
        this.snackBar.open('Mail Sent',null,{
          duration:5000
        });
      },5500)
      // this.dialog.closeAll();
    
      
  }
    

  async printInvoice() {
    let data = document.getElementById('demo').innerHTML;
    let pdfData=data;

    await this.uploadService.generateInvoicePDF(pdfData,this.invoiceId+"_Invoice_"+moment().format("DD-MM-YYYY"),"cabInvoice",this.user,this.companyProfile,this.bankAccount)

    this.attachments.push({fileName:"Invoice_"+moment().format("DD-MM-YYYY"),path:this.invoiceId+"_Invoice_"+moment().format("DD-MM-YYYY")+".pdf"})
  }

  async printDutySummary()
  {
    let data2 = document.getElementById('demo2').innerHTML;
    console.log(data2);
    
    let pdfData2=data2;

    await this.uploadService.generateInvoicePDF(pdfData2,this.invoiceId+"_DutySummary_"+moment().format("DD-MM-YYYY"),"dutySummary",this.user,this.companyProfile,this.bankAccount)

    this.attachments.push({fileName:"DutySummary_"+moment().format("DD-MM-YYYY"),path:this.invoiceId+"_DutySummary_"+moment().format("DD-MM-YYYY")+".pdf"})
  }
     
}
