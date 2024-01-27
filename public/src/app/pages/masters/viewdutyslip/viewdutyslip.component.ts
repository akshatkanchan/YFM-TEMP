import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatSnackBar } from '@angular/material';
import { Duty } from '../../duties/duty';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { CompanyprofileService } from '../../circles/companyprofile/companyprofile.service';
import { CompanyProfile } from '../../circles/companyprofile/companyprofile';
import { DutiesService } from '../../duties/duties.service';
import * as moment from 'moment';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';

@Component({
  selector: 'viewdutyslip',
  templateUrl: './viewdutyslip.component.html',
  styleUrls: ['./viewdutyslip.component.scss']
})
export class ViewdutyslipComponent implements OnInit {
  
  duty: Duty = {}
  additionalCharges: any[] = [];
  dutySummary: any = {}
  user:User = {}
  mapImgUrl:any="";
  signImgUrl:any="";
  mapImg:any;
  signImg:any;
  dutySlipImgUrl:any='';
  routeInfoUrl: any = '';
  companyName: any;

  @ViewChild('dutySlip') dutySlip: ElementRef;

  constructor(
    private auth:AuthService,
    @Inject (MAT_DIALOG_DATA) public data,
    private dialog: MatDialog,
    private dutiesService: DutiesService,
    private uploadService: FileuploadService,
    private _sanitizer:DomSanitizer,
    private snackBar: MatSnackBar,
    private companyprofileService: CompanyprofileService
  ) {
    console.log(data);
    this.duty = data;
  }

  ngOnInit() {

    this.auth.user.subscribe(data=>{
      this.user=data[0];
      this.dutiesService.getDutyById({id: this.duty.supplierDId}).subscribe(data => {
        this.companyprofileService.getCompanyProfile({ownerId: data[0].ownerId}).subscribe(data => {
          this.companyName = data[0].name;
        })
        this.uploadService.getFile(this.companyName,"closeDutyPics/Pictures/"+this.duty.supplierDId,"mapRoute.jpg").subscribe(data=>{
          this.mapImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' +  data.text().toString());
          console.log(this.mapImgUrl);
        })
        
        this.uploadService.getFile(this.companyName,"closeDutyPics/Pictures/"+this.duty.supplierDId,"signature.jpg").subscribe(data=>{
          this.signImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text().toString());
        })
      })
      
    })

    this.dutiesService.getEndedCloseDutyAdditionalCharges({id: this.duty.supplierDId}).subscribe(data => {
      this.additionalCharges = data;
      console.log(this.additionalCharges);
      this.additionalCharges.forEach(element => {
        console.log(element);
        if(element.fileName != 'undefined' && element.fileName != null) {
          this.uploadService.getPresignedUrl(this.companyName,element.fileName,'closeDutyPics/Pictures/'+this.data.supplierDId).subscribe(data => {
            element.url = data._body;
          })
        }
      })
    })

    this.dutiesService.getDutySlipSummary({id: this.duty.supplierDId}).subscribe(data => {
      console.log(data)
      this.dutySummary = data[0];

      this.uploadService.getPresignedUrl(this.companyName,this.dutySummary.dutySlipFileName,'dutySlip').subscribe(data => {
        this.dutySlipImgUrl = data._body;
      })
      
      var startTime = moment(moment(this.dutySummary.startDate).format("YYYY-MM-DD")+" "+this.dutySummary.startTime, "YYYY-MM-DD HH:mm a");
      var endTime = moment(moment(this.dutySummary.endDate).format("YYYY-MM-DD")+" "+this.dutySummary.endTime,"YYYY-MM-DD HH:mm a");

      this.dutySummary.endTime= moment(this.dutySummary.endTime, "HH:mm a");;
      this.dutySummary.startTime=moment(this.dutySummary.startTime, "HH:mm a");

      var totalHrs = endTime.diff(startTime,'hours')
      var totalMins = endTime.diff(startTime,'minutes');

      var clearMins = totalMins % 60;

      this.dutySummary.totalTime = totalHrs+"hrs "+clearMins+"mins"
      
      this.dutySummary.totalKm = this.dutySummary.endKm - this.dutySummary.startKm;
      if(this.dutySummary.maxHrs == '' || totalHrs < this.dutySummary.maxHrs) {
        this.dutySummary.extraTime = 0;
      }
      else {
        this.dutySummary.extraTime =(totalHrs-this.dutySummary.maxHrs)+"hrs "+clearMins+"mins"
      }
      if(this.dutySummary.maxKms == '' || (Number(this.dutySummary.totalKm) - Number(this.dutySummary.maxKms)) <= 0) {
        this.dutySummary.extraKm = 0;
      }
      else if((Number(this.dutySummary.totalKm) - Number(this.dutySummary.maxKms)) > 0) {
        this.dutySummary.extraKm = Number(this.dutySummary.totalKm) - Number(this.dutySummary.maxKms);
      }
      console.log(this.dutySummary.totalTime);
      
      console.log(this.dutySummary);
    })

    this.getRouteInfo();
  }

  approveDutySlip() {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.dutiesService.completeDuty(this.duty).subscribe(data => {},err => {}, () => {
          this.snackBar.open("Close Duty Approved","X", {duration: 3000});
          this.dialog.closeAll();
        })
      }
    })
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  print() {
    // let data = document.getElementById('demo').innerHTML;  
    let data = this.dutySlip.nativeElement.innerHTML;      
    let newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    newWindow.document.open();
    newWindow.document.write(`
    <html>
      <head>        
        <style media="print">    
         .row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          }  
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
          }
          .col-lg-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
          }
          .col-lg-8 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 66.66666667%;
            flex: 0 0 66.66666667%;
            max-width: 66.66666667%;
          }
          .col-lg-4 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 33.33333333%;
            flex: 0 0 33.33333333%;
            max-width: 33.33333333%;
          }
          .ptb-10 {
            padding: 10px 0px 10px 0px;
          }
          .col-lg-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
          }
          .table {
            width: 100%;
            max-width: 100%;
            margin-bottom: 1rem;
            background-color: transparent;
            border-collapse: collapse;
          }
          }
          .table-bordered {
            border: 1px solid #e9ecef;
          }
          @page {
            size:  8.27in 11.69in !important;   /* auto is the initial value */
            margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
          }
          @media print {
            @page {
              size:  8.27in 11.69in !important;   /* auto is the initial value */
              margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
            html {
              margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }
            body {
              margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
            }
          }
        </style>
      </head>
      <body onload="window.print();window.close()">${data}</body>

    </html>`);
    newWindow.document.close();
  }

  getRouteInfo(){
    this.uploadService.getPresignedUrl(this.companyName,'route_info.csv','closeDutyPics/RouteCSV/'+this.duty.supplierDId).subscribe(data => {
      if(data.length > 0) {
        this.routeInfoUrl = data._body;
      }
    })
  }
}
