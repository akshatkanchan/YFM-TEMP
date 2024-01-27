import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Http } from '@angular/http';
import { BusinessSettings } from '../../circles/businesssetting/businesssetting.component';
import { AuthService } from '../../../core/auth.service';
import { DutiesService } from '../duties.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { FileuploadService } from '../../../fileupload.service';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { User } from '../../../core/user';


@Component({
  selector: 'senddutytosuppliers',
  templateUrl: './senddutytosuppliers.component.html',
  styleUrls: ['./senddutytosuppliers.component.scss']
})
export class SenddutytosuppliersComponent implements OnInit {

  dutyData: any;
  supplierData: any;
  mailSubject: string = "Request of Cab supply for following duties";
  mailBody: any;
  businessSettings: BusinessSettings={}
  companyLogo:any='';
  companyProfile: CompanyProfile={};
  user:User={};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http:Http,
    private dialog: MatDialog,
    private auth: AuthService,
    private dutiesService: DutiesService,
    private _sanitizer:DomSanitizer,
    private companyProfileService: CompanyprofileService,
    private uploadService : FileuploadService,
    private snackBar: MatSnackBar,
  ) {
    if(data != null) {
      this.dutyData = data[0];
      this.supplierData = data[1];
    }
  }

  ngOnInit() {
    this.auth.businessSettings.subscribe(data => {
      this.businessSettings = data;
    })

    this.auth.user.subscribe(data=>{
      this.user=data[0];

      this.companyProfileService.getCompanyProfile(this.user).subscribe(data => {
        this.companyProfile = data[0];

        this.uploadService.getFile(this.user.companyName,'profileImages',this.companyProfile.companyLogo).subscribe(data=>{
          this.companyLogo = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
        })
      })
    })
  }

  deleteChip(i) {
    this.supplierData.splice(i,1);
    if(this.supplierData.length == 0) {
      this.dialog.closeAll();
    }
  }

  sendMail(div1: HTMLDivElement) {
    this.mailBody = div1;
    if(this.businessSettings.CCAllAllotmentEmails) {
      var temp = {
        companyEmail: this.companyProfile.email,
        name: this.companyProfile.name,
        email: [this.supplierData[0].email],
        cc: this.businessSettings.AutoCCEmail,
        date: this.dutyData[0].startDate,
        subject: this.mailSubject,
        mailBody:this.mailBody.innerHTML,
        vehicle:this.dutyData[0].vehicle,
      }  
    }
    else {
      var temp = {
        companyEmail: this.companyProfile.email,
        name: this.companyProfile.name,
        email: [this.supplierData[0].email],
        cc: '',
        date: this.dutyData[0].startDate,
        subject: this.mailSubject,
        mailBody:this.mailBody.innerHTML,
        vehicle:this.dutyData[0].vehicle,
      }
    }
    
    this.http.post('/Voip/sendMail',temp).subscribe(data=>{
      console.log(data)      
    },err=>{},()=>{
      this.snackBar.open("Email Sent", "X", {duration: 3000});
    })

    var body = {
      supplierId: this.supplierData[0].id,
      supplierName: this.supplierData[0].name,
      supplierType:this.supplierData[0].type,
      status: 'Details pending',
      id: this.dutyData[0].id
    }
    
    this.dutiesService.updatedutyForOffline(body);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
