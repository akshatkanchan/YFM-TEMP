import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Driver } from './driver';
import { DriverService } from './driver.service';
import { User } from '../../../core/user';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AuthService } from '../../../core/auth.service';
import { NewBranchService } from '../../operations/new-branch/new-branch.service';
import { FormControl } from '@angular/forms';
import { Branch } from '../../operations/new-branch/new-branch.component';
import {map, startWith} from 'rxjs/operators';
import * as moment from 'moment'
import { FileuploadService } from '../../../fileupload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivitylogService } from '../../../activitylog.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.scss']
})
export class NewDriverComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    event.returnValue = false;
  }

  sameAsPermanent: boolean = false;
  myModel:any;
  user:User={};
  branchesCtrl:FormControl = new FormControl();
  branches:Branch[];
  branch:any;
  editState:boolean=false
  selectedFiles: FileList;
  imgUrl:any = '';
  imgLicenseUrl:any = '';
  imgAadharUrl:any = '';
  imgPanUrl:any = '';
  previousImgUrl:any= ''
  previousImgLicenseUrl:any= ''
  previousImgAadharUrl:any= ''
  previousImgPanUrl:any= ''
  logs=[];
  ws: WebSocket;
  img: File;
  imgLicense: File;
  imgAadhar: File;
  imgPan: File;
  imgName: any;
  imgLicenseName: any;
  imgAadharName: any;
  imgPanName: any;

  ngOnInit(){
    var HOST = location.origin.replace(/^http/, 'ws')
    this.ws = new WebSocket(HOST);
    this.auth.user.subscribe(data=>{
      this.driver.ownerId=data[0].ownerId
      this.user=data[0]

      this.branchService.getBranches(this.user).subscribe(data=>{
        this.branches=data;
        this.branch=this.branchesCtrl.valueChanges
        .pipe(
          startWith(''),
          map(val=>this.filterBranches(val))
        )
      })
    })

    if(this.data.row!=null)
    {
      console.log(this.data.row)
      this.editState=true
      this.driver=this.data.row
      console.log(this.driver);
      
      this.activityLogs.getDriverLogs({id:this.data.row.id}).subscribe(data=>{
        this.logs = data
      })

      if(this.driver.fileName!='' && this.driver.fileName!=null)
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.fileName).subscribe(data=>{
          this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
          this.previousImgUrl = this.imgUrl;
        })
       
      if(this.driver.licenseFileName!='' && this.driver.licenseFileName!=null)  
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.licenseFileName).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.imgLicenseUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());
            this.previousImgLicenseUrl = this.imgLicenseUrl.changingThisBreaksApplicationSecurity;
            this.imgLicenseUrl = this.previousImgLicenseUrl;
            this.imgLicenseName = this.driver.licenseFileName;
          }
          else {
            this.imgLicenseUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgLicenseUrl = this.imgLicenseUrl.changingThisBreaksApplicationSecurity;
            this.imgLicenseUrl = this.previousImgLicenseUrl;
          }
        })
      
      if(this.driver.aadharFileName!='' && this.driver.aadharCardNumber!=null)
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.aadharFileName).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.imgAadharUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());
            this.imgAadharName = this.driver.aadharFileName;
            this.previousImgAadharUrl = this.imgAadharUrl.changingThisBreaksApplicationSecurity;
            this.imgAadharUrl = this.previousImgAadharUrl
          }
          else {
            this.imgAadharUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgAadharUrl = this.imgAadharUrl.changingThisBreaksApplicationSecurity;
            this.imgAadharUrl = this.previousImgAadharUrl
          }
        })
      
      if(this.driver.panFileName!='' && this.driver.panFileName!=null)
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.panFileName).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.imgPanUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf,'+ data.text());;
            this.imgPanName = this.driver.panFileName;
            this.previousImgPanUrl = this.imgPanUrl.changingThisBreaksApplicationSecurity;
            this.imgPanUrl = this.previousImgPanUrl;
          }
          else {
            this.imgPanUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgPanUrl = this.imgPanUrl.changingThisBreaksApplicationSecurity;
            this.imgPanUrl = this.previousImgPanUrl;
          }
        })
    }
    else{
      this.editState=false;
    }
  }
  filterBranches(val:string){
    return this.branches.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()))
  }
  setBranches(temp,event:any){
    if(event.source.selected==true)
    {
      this.driver.branches=temp.name
      this.driver.branchId=temp.id
    }
  }
  constructor(private matDialogRef:MatDialogRef<NewDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private driverService:DriverService,
    private auth:AuthService,
    public snackBar:MatSnackBar,
    private dialog:MatDialog,
    private branchService:NewBranchService,
    private uploadService : FileuploadService,
    private _sanitizer : DomSanitizer,
    private activityLogs: ActivitylogService,
    private http: Http,
  ) {
    if(data.row != null) {
      delete data.row.userName
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.img = <File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgUrl=reader.result

    reader.readAsDataURL(file)
  }

  selectLicenseFile(event) {
    this.selectedFiles = event.target.files;
    this.imgLicense = <File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgLicenseUrl=reader.result
    this.imgLicenseName = this.imgLicense.name;
    reader.readAsDataURL(file)
  }

  selectAadharFile(event) {
    this.selectedFiles = event.target.files;
    this.imgAadhar = <File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgAadharUrl=reader.result
    this.imgAadharName = this.imgAadhar.name;
    reader.readAsDataURL(file)
  }

  selectPanFile(event) {
    this.selectedFiles = event.target.files;
    this.imgPan = <File>event.target.files[0];
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgPanUrl=reader.result
    this.imgPanName = this.imgPan.name;
    reader.readAsDataURL(file)
  }

  async upload(id) {
    console.log(id);
    
    if(this.imgUrl != '' && this.previousImgUrl != this.imgUrl) {
      this.driver.fileName  = id+this.driver.name+"_profilePhoto.jpg";
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"driverList/"+this.driver.fileName,this.img,'driverImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success) {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
    }
    if(this.imgLicenseUrl != '' && this.previousImgLicenseUrl != this.imgLicenseUrl) {
      var type = this.imgLicense.type.split("/");
      this.driver.licenseFileName = id+this.driver.name+"_licensePhoto."+type[1];
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"driverList/"+this.driver.licenseFileName,this.imgLicense,'driverLicenseImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success) {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
    }
    if(this.imgAadharUrl != '' && this.previousImgAadharUrl != this.imgAadharUrl) {
      var type = this.imgAadhar.type.split("/");
      this.driver.aadharFileName = id+this.driver.name+"_aadharPhoto."+type[1];
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"driverList/"+this.driver.aadharFileName,this.imgAadhar,'driverAadharImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success) {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
    }
    if(this.imgPanUrl != '' && this.previousImgPanUrl != this.imgPanUrl) {
      var type = this.imgPan.type.split("/");
      this.driver.panFileName = id+this.driver.name+"_panPhoto."+type;
      const uploadData= new FormData();
      uploadData.append(this.user.companyName+"/"+"driverList/"+this.driver.panFileName,this.imgPan,'driverPanImage')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      const body = JSON.stringify({ headers: headers });
      
      await this.http.post("/files/uploadS3",uploadData,body).map(res=>res.json()).subscribe(data=>{
        if(data.success) {
          // this.snackBar.open("Flight Details Updated","X",{duration: 3000});
        }
      });
    }
    this.driverService.updateDriver(this.driver).subscribe(data=>{
      console.log(data);
      
      // this.snackBar.open("Driver has been updated",null,{duration:3000});
      // this.dialog.closeAll()
    })
    
  }

  permanentAddress() {
    if(this.sameAsPermanent == false) {
      this.sameAsPermanent = true;
      this.driver.currentAddress = this.driver.permanentAddress
    }
    else if(this.sameAsPermanent == true) {
      this.sameAsPermanent = false;
      this.driver.currentAddress = ''
    }
  }

  addDriver()
  {

    if(this.driver.name.trim()=="")
    {
      this.snackBar.open("Please Enter a Name",null,{
        duration:5000
      });
    }
    // else if(this.driver.mobileNumber.trim()=="")
    // {
    //   this.snackBar.open("Please enter a Mobile Number",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.panCardNumber=="")
    // {
    //   this.snackBar.open("Please enter a PAN Number",null,{
    //     duration:5000
    //   });
    // }
    else if(this.driver.panCardNumber.trim() != "" && !this.driver.panCardNumber.match(/\b([A-Z]{5}[0-9]{4}[A-Z]{1})\b/)) //ask sid
    {
      this.snackBar.open('Enter a valid PAN number',null,{
        duration:5000
      });
    }
    // else if(this.driver.aadharCardNumber.trim()=="")
    // {
    //   this.snackBar.open("Please enter Aadhar Card Number",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.birthDate=="")
    // {
    //   this.snackBar.open("Please enter Birth Date",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.joiningDate=="")
    // {
    //   this.snackBar.open("Please enter Joining Date",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.salaryPerMonth=="")
    // {
    //   this.snackBar.open("Please enter Salary",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.email=="")
    // {
    //   this.snackBar.open("Please enter Email",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.addressType=="")
    // {
    //   this.snackBar.open("Please enter Address Type",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.permanentAddress=="")
    // {
    //   this.snackBar.open("Please enter Address",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.licenseNumber=="")
    // {
    //   this.snackBar.open("Please enter License Number",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.licenseValidUpto=="")
    // {
    //   this.snackBar.open("Please enter Validity of the license",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.workingHoursStart=="")
    // {
    //   this.snackBar.open("Please enter Working Hours Start",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.driver.workingHoursEnd=="")
    // {
    //   this.snackBar.open("Please enter Working Hours End",null,{
    //     duration:5000
    //   });
    // }
    // else if(this.sameAsPermanent) {
    //   this.driver.currentAddress = this.driver.permanentAddress;
    // }
    else
    {
      if(this.driver.birthDate != '') {
        this.driver.birthDate=moment(this.driver.birthDate).format("YYYY-MM-DD")
      }
      if(this.driver.joiningDate != '') {
        this.driver.joiningDate=moment(this.driver.joiningDate).format("YYYY-MM-DD")
      }
      if(this.driver.licenseValidUpto) {
        this.driver.licenseValidUpto=moment(this.driver.licenseValidUpto).format("YYYY-MM-DD")
      }      
      this.driverService.addDriver(this.driver).subscribe(data=>{
        this.driver.id=data.insertId
        this.upload(data.insertId);
        
        if(data.affectedRows==1){
          this.param.inserted='yes';
          this.param.data=this.driver;
          this.activityLogs.addDriverLogs({
            driverId:data.insertId,
            ownerId:this.driver.ownerId,
            message:"Driver created on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
        }

      },err=>{},()=>{
        this.snackBar.open("Driver Added", "X", {duration: 3000});
        this.ws.send(this.user.ownerId+"driver-disp");
        this.matDialogRef.close(this.param);
      });
    }
  }

  editDriver(){

    this.driver.birthDate=moment(this.driver.birthDate).format("YYYY-MM-DD")
    this.driver.joiningDate=moment(this.driver.joiningDate).format("YYYY-MM-DD")
    this.driver.licenseValidUpto=moment(this.driver.licenseValidUpto).format("YYYY-MM-DD")
    console.log(this.driver)
    this.driverService.updateDriver(this.driver).subscribe(data=>{
      this.upload(this.driver.id)
      this.activityLogs.addDriverLogs({
        driverId:this.driver.id,
        ownerId:this.driver.ownerId,
        message:"Driver edited on "+moment().format("DD-MM-YYYY")+" at "+new Date().toLocaleTimeString()+" by "+this.user.name}).subscribe()
    },err=>{},()=>{
      this.snackBar.open("Driver has been updated",null,{duration:3000});
      this.ws.send(this.user.ownerId+"driver-disp");
      this.matDialogRef.close(this.param)
    }) 
  
  }
  closeDialog(){
    this.dialog.closeAll()
  }
  param={
    inserted:'no',
    data:null
  }
  driver:Driver={
    name:'',
    mobileNumber:'',
    alternateNumber:'',
    panCardNumber:'',
    aadharCardNumber:'',
    birthDate:null,
    joiningDate:null,
    salaryPerMonth:'',
    branches:'',
    email:'',
    branchId:null,
    addressType:'',
    permanentAddress:'',
    currentAddress:'',
    dailyAllowance:'',
    overTimeAllowance:'',
    overTimePerHour:'',
    outstationAllowancePerDay:'',
    outstationOvernightAllowance:'',
    extraDutyAllowance:'',
    //extra duty
    secondDuty:'',
    thirdDuty:'',
    fourthDuty:'',
    fifthDuty:'',
    //license
    licenseNumber:'',
    licenseValidUpto:null,
    workingHoursStart:'',
    workingHoursEnd:'',    
    fileName:'',
    licenseFileName: '',
    aadharFileName: '',
    panFileName: '',
    isContractor: false,
    active: true,
    ownerId:'',
    userId:null,
    dailyWages: '',
    sundayAllowance: '',
    earlyStartAllowance: '',
    nightAllowancePerDay: '',
    additionalInfo: '',
  }

  removeDriverPhoto()
  {
    this.imgUrl='';
    this.previousImgUrl=''
    this.driver.fileName=''
  }

  removeLicensePhoto()
  {
    this.imgLicenseUrl='';
    this.previousImgLicenseUrl='';
    this.driver.licenseFileName='';
    this.imgLicenseName='';
  }

  removeAadharPhoto()
  {
    this.imgAadharUrl='';
    this.previousImgAadharUrl=''
    this.driver.aadharFileName=''
    this.imgAadharName='';
  }

  removePANPhoto()
  {
    this.imgPanUrl='';
    this.previousImgPanUrl=''
    this.driver.panFileName='';
    this.imgPanName=''
  }
}
 
  
  
