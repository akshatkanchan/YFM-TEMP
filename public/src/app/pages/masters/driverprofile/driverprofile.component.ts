import { Component, OnInit, Inject } from '@angular/core';
import { Driver } from '../new-driver/driver';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { NewDriverComponent } from '../new-driver/new-driver.component';
import { DriverService } from '../new-driver/driver.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'driverprofile',
  templateUrl: './driverprofile.component.html',
  styleUrls: ['./driverprofile.component.scss']
})
export class DriverprofileComponent implements OnInit {

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
  loader=false;
  oldPassword;
  newPassword;
  confirmPassword;
  editState=false;
  currUser:any={};
  imgUrl:any='';
  previousImgUrl:any='';
  user:User={};
  isOwner=false;
  isError=false;
  error='';
  isProfileImage=true;
  ws: WebSocket;
  _albums:any[] = [];
  _licenseAlbums:any[] = [];
  _aadharAlbums:any[] = [];
  _panAlbums:any[] = [];
  imgLicenseUrl:any = '';
  imgAadharUrl:any = '';
  imgPanUrl:any = '';
  previousImgLicenseUrl:any= '';
  previousImgAadharUrl:any= '';
  previousImgPanUrl:any= '';
  imgLicense: any;
  imgAadhar: any;
  imgPan: any;

  constructor(
    private auth:AuthService,
    private _sanitizer:DomSanitizer,
    private uploadService:FileuploadService,
    private snackBar:MatSnackBar,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private driverService: DriverService,
    private _lightbox: Lightbox
  ) { }

  ngOnInit() {

    this.auth.user.subscribe(data=>
    {
      this.user = data[0];
      if(this.data.row!=null)
      {
        this.driver=this.data.row        
      }
      
      if(this.driver.fileName!='' && this.driver.fileName!=null)
      {
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.fileName).subscribe(data=>{
          this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
          this.previousImgUrl = this.imgUrl;
          const album = {
            src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
          };
          this._albums.push(album);
        })
      }
      else
      {
        this.imgUrl="../../../../assets/icons/iconfinder_user_925901.svg";
        const album = {
          src: '../../../../assets/icons/iconfinder_user_925901.svg'
        };
        this._albums.push(album);
      }
      if(this.driver.licenseFileName!='' && this.driver.licenseFileName!=null) {
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.licenseFileName).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.imgLicenseUrl = null;
          }
          else {
            this.imgLicenseUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgLicenseUrl = this.imgLicenseUrl;
          }
          this.uploadService.getPresignedUrl(this.user.companyName,this.driver.licenseFileName,'driverList').subscribe(data => {
            this.imgLicense = data._body;
          })
          const album = {
            src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
          };
          this._licenseAlbums.push(album);
        })
      }
      if(this.driver.aadharFileName!='' && this.driver.aadharFileName!=null) {
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.aadharFileName).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.imgAadharUrl = null;
          }
          else {
            this.imgAadharUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgAadharUrl = this.imgAadharUrl;
          }
          this.uploadService.getPresignedUrl(this.user.companyName,this.driver.aadharFileName,'driverList').subscribe(data => {
            this.imgAadhar = data._body;
          })
          const album = {
            src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
          };
          this._aadharAlbums.push(album);
        })
      }
      if(this.driver.panFileName!='' && this.driver.panFileName!=null) {
        this.uploadService.getFile(this.user.companyName,'driverList',this.driver.panFileName).subscribe(data=>{
          if(data.text().includes("PDF")) {
            this.imgPanUrl = null;
          }
          else {
            this.imgPanUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgPanUrl = this.imgPanUrl;
          }
          this.uploadService.getPresignedUrl(this.user.companyName,this.driver.panFileName,'driverList').subscribe(data => {
            this.imgPan = data._body;
          })
          const album = {
            src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
          };
          this._panAlbums.push(album);
        })
      }
    })

  }

  selectFile(event) {
    this.isProfileImage=true;
    const file=event.target.files[0]
    const reader=new FileReader();
    reader.onload=e=>this.imgUrl=reader.result

    reader.readAsDataURL(file)
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  edit() {
    this.dialog.open(NewDriverComponent,{autoFocus:false,disableClose:true,data:{
      row: this.data.row
    }})
  }

  delete() {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
      if(data=='no'){}
      if(data=='yes'){
        this.driverService.deleteDriver(this.data.row).subscribe(data => {
          if(data.errno==undefined) {
            this.ws.send(this.user.ownerId+"driver-disp");
            this.snackBar.open("Driver Deleted","X",{duration:3000});
          }
          else {
            if(data.errno==1451) {
              window.alert("Cannot delete because you have corresponding Data");
            }
            else {
              window.alert("Error Cannot Delete Booking");
            }
          } 
        });
      }      
    })
  }

  upload() {

    if(this.isProfileImage==true) {
      this.driver.fileName  = this.driver.id+this.driver.name+"_profilePhoto.jpg";
      this.uploadService.uploadfile(this.user.companyName,'driverList',this.driver.fileName,this.imgUrl);
    }
  }

  // save()
  // {
  //   if(this.isOwner==false)
  //   {
  //     if(this.isProfileImage==true)
  //     {
  //       var temp={
  //         mobilenumber:this.currUser.mobilenumber,
  //         currentAddress: this.currUser.currentAddress,
  //         bloodGroup:this.currUser.bloodGroup,
  //         userId:this.user.id,
  //         fileName: this.user.id+"_"+this.user.name+"_profilePhoto.jpg"
  //       }
  //     }
  //     else
  //     {
  //       var temp={
  //         mobilenumber:this.currUser.mobilenumber,
  //         currentAddress: this.currUser.currentAddress,
  //         bloodGroup:this.currUser.bloodGroup,
  //         userId:this.user.id,
  //         fileName: ''
  //       }
  //     }
      
  //     this.auth.EditMyProfile(temp).subscribe(data=>{
  //       this.snackBar.open("Profile has been updated","X",{duration:3000})
  //       if(this.previousImgUrl != this.imgUrl)
  //       {
  //         this.upload()
  //       }
  //     })
  //   }
  //   else
  //   {
  //     console.log("asd");
      
  //     if(this.isProfileImage==true)
  //     {
  //       var tempOwner={
  //         fileName: this.user.id+"_"+this.user.name+"_profilePhoto.jpg",
  //         phone:this.currUser.phone,
  //         userId:this.user.id
  //       }
  //     }
  //     else
  //     {
  //       var tempOwner={
  //         fileName: '',
  //         phone:this.currUser.phone,
  //         userId:this.user.id
  //       }
  //     }
  //     this.auth.EditMyProfileOwner(tempOwner).subscribe(data=>{
  //       this.snackBar.open("Profile has been updated","X",{duration:3000})
  //       if(this.previousImgUrl != this.imgUrl)
  //       {
  //         this.upload()
  //       }
  //     })
  //   }
  // }

  // changePassword()
  // {
  //   this.loader = true;
  //   this.auth.verifyPassword(this.oldPassword).then(()=>{
  //     if(this.newPassword!=this.confirmPassword)
  //     {
  //       this.loader=false;
  //       this.isError=true
  //       this.error = 'Passwords do not match'
  //     }
  //     else
  //     {
  //       this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
  //         if(data=='no'){}
  //         if(data=='yes'){
  //           var temp={
  //             email:this.user.email,
  //             password:this.newPassword,
  //             type:'employee',
  //             userId:this.user.id
  //           }
  //           this.auth.changePasswordFromApp(temp).subscribe(data=>{
  //             this.loader=false;
  //             this.isError=false;
  //             this.snackBar.open("Password updated");
  //           })
  //         }
  //       })
  //     }
  //   }).catch(()=>{
  //     this.loader=false;
  //     this.isError=true
  //     this.error = 'Old password is incorrect'
  //   })
  // }

  removeImage()
  {
    this.imgUrl="../../../../assets/icons/iconfinder_user_925901.svg";
    this.isProfileImage=false;
  }

  open(albums): void {
    this._lightbox.open(albums);
  }

}


