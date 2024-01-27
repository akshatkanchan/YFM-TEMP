import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../../../core/user';
import { FileuploadService } from '../../../fileupload.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../modals/confirm/confirm.component';

@Component({
  selector: 'myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

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

  constructor(private auth:AuthService, private _sanitizer:DomSanitizer, private uploadService:FileuploadService, private snackBar:MatSnackBar, private dialog:MatDialog) { }

  ngOnInit() {

    this.auth.user.subscribe(data=>
    {
      
      this.user=data[0];
      if(this.user.type=='owner')
      {
        this.isOwner=true;
        this.currUser=this.user;
        console.log(this.currUser);
        
      }
      else
      {
        this.auth.myProfile(this.user).subscribe(data=>{
          console.log(data)
          this.currUser = data[0]
        })
      }
      if(this.user.fileName!='' && this.user.fileName!=null)
      {
        this.uploadService.getFile(this.user.companyName,'userImages',this.user.fileName).subscribe(data=>{
          this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + data.text());
          this.previousImgUrl = this.imgUrl;
        })
        this.isProfileImage=true;
      }
      else
      {
        this.imgUrl="../../../../assets/icons/iconfinder_user_925901.svg"
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

  upload() {

    if(this.isProfileImage==true) {
      this.user.fileName  = this.user.id+"_"+this.user.name+"_profilePhoto.jpg";
      this.uploadService.uploadfile(this.user.companyName,'userImages',this.user.fileName,this.imgUrl);
    }
  }

  save()
  {
    if(this.isOwner==false)
    {
      if(this.isProfileImage==true)
      {
        var temp={
          mobilenumber:this.currUser.mobilenumber,
          currentAddress: this.currUser.currentAddress,
          bloodGroup:this.currUser.bloodGroup,
          userId:this.user.id,
          fileName: this.user.id+"_"+this.user.name+"_profilePhoto.jpg"
        }
      }
      else
      {
        var temp={
          mobilenumber:this.currUser.mobilenumber,
          currentAddress: this.currUser.currentAddress,
          bloodGroup:this.currUser.bloodGroup,
          userId:this.user.id,
          fileName: ''
        }
      }
      
      this.auth.EditMyProfile(temp).subscribe(data=>{
        this.snackBar.open("Profile has been updated","X",{duration:3000})
        if(this.previousImgUrl != this.imgUrl)
        {
          this.upload()
        }
      })
    }
    else
    {
      console.log("asd");
      
      if(this.isProfileImage==true)
      {
        var tempOwner={
          fileName: this.user.id+"_"+this.user.name+"_profilePhoto.jpg",
          phone:this.currUser.phone,
          userId:this.user.id
        }
      }
      else
      {
        var tempOwner={
          fileName: '',
          phone:this.currUser.phone,
          userId:this.user.id
        }
      }
      this.auth.EditMyProfileOwner(tempOwner).subscribe(data=>{
        this.snackBar.open("Profile has been updated","X",{duration:3000})
        if(this.previousImgUrl != this.imgUrl)
        {
          this.upload()
        }
      })
    }
  }

  changePassword()
  {
    this.loader = true;
    this.auth.verifyPassword(this.oldPassword).then(()=>{
      if(this.newPassword!=this.confirmPassword)
      {
        this.loader=false;
        this.isError=true
        this.error = 'Passwords do not match'
      }
      else
      {
        this.dialog.open(ConfirmComponent,{disableClose:true,autoFocus:false}).afterClosed().subscribe(data=>{
          if(data=='no'){}
          if(data=='yes'){
            var temp={
              email:this.user.email,
              password:this.newPassword,
              type:'employee',
              userId:this.user.id
            }
            this.auth.changePasswordFromApp(temp).subscribe(data=>{
              this.loader=false;
              this.isError=false;
              this.snackBar.open("Password updated");
            })
          }
        })
      }
    }).catch(()=>{
      this.loader=false;
      this.isError=true
      this.error = 'Old password is incorrect'
    })
  }

  removeImage()
  {
    this.imgUrl="../../../../assets/icons/iconfinder_user_925901.svg";
    this.isProfileImage=false;
  }

}
