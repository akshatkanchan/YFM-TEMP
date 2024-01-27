import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Duty } from '../duty';
import { FormGroup } from '@angular/forms';
import { BillingService } from '../../operations/new-billing/billing.service';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { SubUserService } from '../../masters/sub-users/sub-user.service';
import { SubUser } from '../../masters/sub-users/sub-user';

@Component({
  selector: 'duty-slip',
  templateUrl: './duty-slip.component.html',
  styleUrls: ['./duty-slip.component.scss']
})
export class DutySlipComponent implements OnInit {

  css = `
  @media print {
    table  {
    width:100%
    }
    
    .row {
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    }
    .tg {
    border-collapse: collapse;
    border-spacing: 0;
    }
    .tg td {
    font-family: Arial, sans-serif;
    font-size: 16px;
    padding: 10px 5px;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
    word-break: normal;
    border-color: black;
    }
    .tg th{font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold; 
    padding: 10px 5px;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
    word-break: normal;
    border-color: black;
    }
    .tg .tg-baqh {
      text-align: center;
      vertical-align: top;
      font-weight: bold;
      }
    .tg .tg-0lax {text-align: left;
    vertical-align: top;
    padding: 20px;}
    .tg .tg-s6z2 {text-align:center;}
    .tg .tg-s268 {text-align: left;
    padding: 20px}
    .tg .tg-hgcj {font-weight:bold;
    text-align: center}
    .tg .tg-amwm {font-weight: bold;
    text-align: center;
    vertical-align: top;}
    .tg .tg-s268 {text-align: left}
    .tg .tg-vomg {font-size: 11px;
    border-color: #000000;
    text-align: left;
    padding-bottom: 40px;}
    .tg .tg-qtf5 {border-color: #000000;
    text-align: left}
    .tg .tg-vmi1 {font-weight:bold;
    font-size: 12px;
    border-color: #000000;
    padding-bottom: 40px;
    text-align: left;}}`;
  first;
  second;
  printData:Duty={};
  billingItemsForm:FormGroup
  billingItems:any;
  user:User={};
  businessSettings: BusinessSettings = {};
  companyProfile: CompanyProfile = {};
  companyLogo:any=''
  permission:SubUser={};

  constructor(
    @Inject (MAT_DIALOG_DATA) public data,
    private billingService:BillingService,
    private auth:AuthService,
    private dialog: MatDialog,
    private _sanitizer:DomSanitizer,
    private uploadService:FileuploadService,
    private companyProfileService: CompanyprofileService,
    private permissionService:SubUserService
  ) { 
    if(data){
      this.printData.cname=data.cname;
      this.printData.bid=data.bid;
      this.printData.bookBy=data.bookBy;
      this.printData.dutyType=data.dutyType;
      this.printData.passenger=data.passenger;
      this.printData.vehicleGroup=data.vehicleGroup;
      this.printData.startDate=data.startDate;
      this.printData.vehicle=data.vehicle;
      this.printData.reportingTime=data.reportingTime;
      this.printData.driver=data.driver;
      this.printData.reportingAddress=data.reportingAddress;
      this.printData.dropAddress=data.dropAddress;      
    }
  }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.auth.permissions.subscribe(data => {
        this.permission=data[0]
      })
      // this.billingService.getBilling(this.user).subscribe(data=>{
      //   this.billingItems=data[0]
      // })

      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0]

        this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
          this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
        })

      }) 
    })
    this.auth.businessSettings.subscribe(data => {
      this.businessSettings = data;
    })    
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  print() {
    let data = document.getElementById('print-section').innerHTML;
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    newWindow.document.open();
    newWindow.document.write(`
    <html>
      <head>
        <title>Duty Slip</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <style>          
          body {
            font-family: "Trebuchet MS" !important;
            font-size: 16px !important;
          }
          table  {
					  width:100%
				  }					
					.row {
					  margin-left: 15px;
					  margin-right: 15px;
            padding: 10px;            
					}
					.tg {
					  border-collapse: collapse;
					  border-spacing: 0;
					}
					.tg td {
					  font-family: Arial, sans-serif;
					  font-size: 16px;
					  padding: 10px 5px;
					  border-style: solid;
					  border-width: 2px;
					  overflow: hidden;
					  word-break: normal;
					  border-color: black;
					}
					.tg th{
            font-family: Arial, sans-serif;
					  font-size: 16px;
					  font-weight: bold; 
					  padding: 10px 5px;
					  border-style: solid;
					  border-width: 2px;
					  overflow: hidden;
					  word-break: normal;
					  border-color: black;
					}
					.tg .tg-baqh {
						text-align: center;
						vertical-align: top;
						font-weight: bold;
						}
					.tg .tg-0lax {
            text-align: left;
					  vertical-align: top;
            padding: 20px;
          }
					.tg .tg-s6z2 {
            text-align:center;
          }
					.tg .tg-s268 {
            text-align: left;
            padding: 20px
          }
					.tg .tg-hgcj {
            font-weight:bold;
            text-align: center
          }
					.tg .tg-amwm {
            font-weight: bold;
					  text-align: center;
            vertical-align: top;
          }
					.tg .tg-s268 {
            text-align: left
          }
					.tg .tg-vomg {
            font-size: 12px;
            border-color: #000000;
					  text-align: left;
            padding-bottom: 40px;
          }
					.tg .tg-qtf5 {
            border-color: #000000;
            text-align: left
          }
					.tg .tg-vmi1 {
            font-weight:bold;
					  font-size: 12px;
					  border-color: #000000;
					  padding-bottom: 40px;
            text-align: left;
          }
          @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 0mm !important;  /* this affects the margin in the printer settings */
            }
          @media print {
            @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 0mm !important;  /* this affects the margin in the printer settings */
            }
            html
            {
                margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                margin: 5mm 5mm 5mm 5mm !important; /* margin you want for the content */
            }
          }
        </style>
      </head>
      <body onload="window.print();window.close()">${data}</body>
    </html>`);
    newWindow.document.close();
  }

  printHalf() {
    let data = document.getElementById('print-section2').innerHTML;
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    newWindow.document.open();
    newWindow.document.write(`
    <html>
      <head>
        <title>Duty Slip</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <style>          
          body {
            font-family: "Trebuchet MS" !important;
            font-size: 16px !important;
          }
          table  {
					  width:100%
				  }					
					.row {
					  margin-left: 15px;
					  margin-right: 15px;
            padding: 10px;            
					}
					.tg {
					  border-collapse: collapse;
					  border-spacing: 0;
					}
					.tg td {
					  font-family: Arial, sans-serif;
					  font-size: 16px;
					  padding: 10px 5px;
					  border-style: solid;
					  border-width: 2px;
					  overflow: hidden;
					  word-break: normal;
					  border-color: black;
					}
					.tg th{
            font-family: Arial, sans-serif;
					  font-size: 16px;
					  font-weight: bold; 
					  padding: 10px 5px;
					  border-style: solid;
					  border-width: 2px;
					  overflow: hidden;
					  word-break: normal;
					  border-color: black;
					}
					.tg .tg-baqh {
						text-align: center;
						vertical-align: top;
						font-weight: bold;
						}
					.tg .tg-0lax {
            text-align: left;
					  vertical-align: top;
            padding: 20px;
          }
					.tg .tg-s6z2 {
            text-align:center;
          }
					.tg .tg-s268 {
            text-align: left;
            padding: 20px
          }
					.tg .tg-hgcj {
            font-weight:bold;
            text-align: center
          }
					.tg .tg-amwm {
            font-weight: bold;
					  text-align: center;
            vertical-align: top;
          }
					.tg .tg-s268 {
            text-align: left
          }
					.tg .tg-vomg {
            font-size: 12px;
            border-color: #000000;
					  text-align: left;
            padding-bottom: 40px;
          }
					.tg .tg-qtf5 {
            border-color: #000000;
            text-align: left
          }
					.tg .tg-vmi1 {
            font-weight:bold;
					  font-size: 12px;
					  border-color: #000000;
					  padding-bottom: 40px;
            text-align: left;
          }
          @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 0mm !important;  /* this affects the margin in the printer settings */
            }
          @media print {
            @page 
            {
                size:  8.27in 11.69in !important;   /* auto is the initial value */
                margin: 0mm !important;  /* this affects the margin in the printer settings */
            }
            html
            {
                margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                margin: 5mm 5mm 5mm 5mm !important; /* margin you want for the content */
            }
          }
        </style>
      </head>
      <body onload="window.print();window.close()">${data}</body>
    </html>`);
    newWindow.document.close();
  }
}
