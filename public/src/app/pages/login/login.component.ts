import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(300, style({opacity:1})) 
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  email;
  password;
  isError =false;
  loader=false;
  passwordReset=false;
  emailSent=false;
  error='';
  
  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit() {

    if(localStorage.getItem("rtcuieo") && this.auth.isAuthenticated())
    {
      this.router.navigate(['/pages']);
    }
    
  }
 
  onSubmit(formData)
  {
    this.loader=true
    if(!this.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/))
    {
      this.isError = true;
      this.error = 'Enter a valid email address';
      this.loader=false;
    }
    else
    {
      this.auth.Login(formData).then(data=>{data
        if(data==false)
        {
          this.loader=false
          this.isError = true
          this.error = 'Incorrect username or password'
        }
      })
    } 
  }

  resetPassword()
  {
    this.passwordReset=true;
    this.isError=true;
    this.error='A password reset link will be sent to your E-mail ID'
  }

  sendEmail() { 
    if (!this.email) { 
      this.isError = true;
      this.error = 'Enter a valid email address';
    }
    else if(!this.email.match(/\b([a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$)\b/))
    {
      this.isError = true;
      this.error = 'Enter a valid email address';
      this.loader=false;
    }
    else
    {
      this.auth.changePassword(this.email).then(()=>{
        this.emailSent=true;
        this.isError=false;
        this.error='';
      }).catch(()=>{
        this.isError=false;
        this.error='There seems to be an error. Please try again';
      })
    }
  }

  gotoLogin()
  {
    this.passwordReset=false;
    this.emailSent = false;
    this.isError=false;
    this.error=''
  }
}
