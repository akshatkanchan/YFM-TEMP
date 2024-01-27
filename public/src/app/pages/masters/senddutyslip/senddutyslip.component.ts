import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Duty } from '../../duties/duty';
import { Http } from '@angular/http';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';

@Component({
  selector: 'senddutyslip',
  templateUrl: './senddutyslip.component.html',
  styleUrls: ['./senddutyslip.component.scss']
})
export class SenddutyslipComponent implements OnInit {
  printData: Duty={};

  user: User = {};
  mailBody: any;
  mailSubject: any = "Your booking has been confirmed";
  companyProfile: CompanyProfile = {};
  companyLogo:any=''

  constructor(
    @Inject (MAT_DIALOG_DATA) public data, 
    private dialog: MatDialog,
    private http:Http,
    private auth: AuthService,  
    private _sanitizer:DomSanitizer,
    private uploadService:FileuploadService,
    private companyProfileService: CompanyprofileService  
  ) {
    if(data) {
      console.log(data)
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
      
      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0]

        this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
          this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
        })

      })

    })
  }

  sendMail(div1: HTMLDivElement) {
    this.mailBody = div1;
    var temp = {
      companyEmail: this.companyProfile.email,
      name: this.companyProfile.name,
      email: this.data.row.bookByEmail,      
      subject: this.mailSubject,
      mailBody:this.mailBody.innerHTML,      
    }
    console.log(temp)
    this.http.post('/Voip/sendMail',temp).subscribe(data=>{
      console.log(data)      
    })
    console.log(this.mailSubject)
    console.log(this.mailBody.innerHTML)
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
