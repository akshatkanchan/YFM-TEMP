import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Http } from '@angular/http';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'changedriverpassword',
  templateUrl: './changedriverpassword.component.html',
  styleUrls: ['./changedriverpassword.component.scss']
})
export class ChangedriverpasswordComponent implements OnInit {

  password:string;
  confirmPassword:string;
  constructor(private snackBar:MatSnackBar,@Inject (MAT_DIALOG_DATA) public data,private dialog:MatDialog,private auth:AuthService,private http:Http) {
    if(data) {
      this.driver.email=data.email
      this.driver.type=data.type
      this.driver.userId=data.id
    }
   }

  ngOnInit() {
  }
  checkPasswords() {
    if(this.password === this.confirmPassword) {
      this.submit()
    } else {
      this.snackBar.open("Passwords does not match","X",{duration:3000});
    }
  }
  submit() {
    this.driver.password = this.password
    console.log(this.driver);
    this.auth.changePasswordFromApp(this.driver).subscribe(data=>{
      this.snackBar.open("Password updated","X",{duration:3000});
    })
  }
  close(){
    this.dialog.closeAll();
  }
  driver:any ={
    email:'',
    type:'',
    password:'',
    userId:'',
  }

}
