import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from '../new-employees/employee';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FileuploadService } from '../../../fileupload.service';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../new-employees/employee.service';
import { Customer } from '../customer';
import { NewEmployeesComponent } from '../new-employees/new-employees.component';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.scss']
})
export class EmployeeprofileComponent implements OnInit {

  employee: Employee = {
    name: '',
    mobilenumber: '',
    alternateNumber: '',
    email: '',
    profilePhoto: '',
    employeeId: '',
    designation: '',
    dateOfBirth: '',
    fatherName: '',
    fatherDateOfBirth: '',
    motherName: '',
    mothersDateOfBirth: '',
    currentAddress: '',
    permanentAddress: '',
    marriageDate: '',
    joiningDate: '',
    bloodGroup: '',
    pfAcNumber: '',
    esi: '',
    uanNumber: '',
    panNumber: '',
    aadharNumber: '',
    dlNumber: '',
    dlExpiry: '',
    badgeNumber: '',
    badgeExpiry: '',
    licenseIssuedBy: '',
    licenseCity: '',
    licenseState: '',
    licenseDate: '',
    policeDisplayCardNumber: '',
    policeDisplayCardExpiry: '',
    policeVerificationNumber: '',
    policeVerificationExpiryDate: '',
    bankDisplayCardNumber: '',
    bankAccountNumber: '',
    bankIfscCode: '',
    esiDispensaryCode: '',
    branches: '',
    branchId: null,
    visibleCustomers: '',
    aadharPhoto: '',
    panCardPhoto: '',
    ownerId: '',
    userId: null
  }
  loader = false;
  oldPassword;
  newPassword;
  confirmPassword;
  editState = false;
  currUser: any = {};
  imgUrl: any = '';
  previousImgUrl: any = '';
  user: User = {};
  isOwner = false;
  isError = false;
  error = '';
  isProfileImage = true;
  ws: WebSocket;
  visibleCustomers: any[] = [];
  customers: Customer[];
  _albums:any[] = [];
  _panAlbums:any[] = [];
  _aadharAlbums:any[] = [];
  panImgUrl:any='';
  previousPanImgUrl='';
  aadharImgUrl:any='';
  previousAadharImgUrl='';
  imgAadhar: any;
  imgPan: any;

  constructor(
    private auth:AuthService,
    private _sanitizer:DomSanitizer,
    private uploadService:FileuploadService,
    private snackBar:MatSnackBar,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
    private _lightbox: Lightbox,
  ) { }

  ngOnInit() {

    this.auth.user.subscribe(data => {
      this.user = data[0];
      if(this.data.row!=null) {
        console.log(this.data.row);
        
        this.employee=this.data.row;
        this.employeeService.getEmployeeLimitCustomer(this.employee).subscribe(data => {
          console.log(data);
          this.visibleCustomers = data;
        })

        if(this.employee.profilePhoto!='' && this.employee.profilePhoto!=null) {
          this.uploadService.getFile(this.user.companyName,'employeeList',this.employee.profilePhoto).subscribe(data => {
            this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
            + data.text());
            this.previousImgUrl = this.imgUrl;
            const album = {
              src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
            };
            this._albums.push(album);
          })
        }
        else {
          this.imgUrl="../../../../assets/icons/iconfinder_user_925901.svg";
          const album = {
            src: "../../../../assets/icons/iconfinder_user_925901.svg"
          };
          this._albums.push(album);
        }
        if(this.employee.aadharPhoto!='' && this.employee.aadharPhoto!=null) {
          this.uploadService.getFile(this.user.companyName,'employeeList',this.employee.aadharPhoto).subscribe(data=>{
            if(data.text().includes("PDF")) {
              this.aadharImgUrl = null;
            }
            else {
              this.aadharImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
              + data.text());
              this.previousAadharImgUrl = this.aadharImgUrl;
            }
            this.uploadService.getPresignedUrl(this.user.companyName,this.employee.aadharPhoto,'employeeList').subscribe(data => {
              this.imgAadhar = data._body;
            })
            const album = {
              src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
            };
            this._aadharAlbums.push(album);
          })
        }
        if(this.employee.panCardPhoto!='' && this.employee.panCardPhoto!=null) {
          this.uploadService.getFile(this.user.companyName,'employeeList',this.employee.panCardPhoto).subscribe(data=>{
            if(data.text().includes("PDF")) {
              this.panImgUrl = null;
            }
            else {
              this.panImgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
              + data.text());
              this.previousPanImgUrl = this.panImgUrl;
            }
            this.uploadService.getPresignedUrl(this.user.companyName,this.employee.panCardPhoto,'employeeList').subscribe(data => {
              this.imgPan = data._body;
            })
            const album = {
              src: this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.text())
            };
            this._panAlbums.push(album);
          })
        }
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
    this.dialog.open(NewEmployeesComponent,{autoFocus:false,disableClose:true,data:{
      row: this.data.row
    }})
  }

  delete() {
    this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data => {
      if(data=='no'){}
      if(data=='yes') {
        this.employeeService.deleteEmployee(this.employee).subscribe(data=>{
          if(data.errno==undefined) {
            this.ws.send(this.user.ownerId+'employeedisp');
            this.snackBar.open("Employee Deleted","X",{duration:3000});
          }
          else {
            if(data.errno==1451) {
              window.alert("Cannot delete because you have corresponding Duties");
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
      this.employee.profilePhoto  = this.employee.id+this.employee.name+"_profilePhoto.jpg";
      this.uploadService.uploadfile(this.user.companyName,'employeeList',this.employee.profilePhoto,this.imgUrl);
    }
  }

  removeImage()
  {
    this.imgUrl="../../../../assets/icons/iconfinder_user_925901.svg";
    this.isProfileImage=false;
  }

  open(album): void {
    this._lightbox.open(album);
  }

}
