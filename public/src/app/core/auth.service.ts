import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Http,Headers } from '@angular/http';
import { ReplaySubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from "@angular/fire/auth";
import { BusinessSettings } from '../pages/circles/businesssetting/businesssetting.component';
import { BusinesssettingService } from '../pages/circles/businesssetting/businesssetting.service';
import { SubUserService } from '../pages/masters/sub-users/sub-user.service';
import { SubUser } from '../pages/masters/sub-users/sub-user';
import * as firebase from 'firebase/app';
import 'firebase/auth'

@Injectable()
export class AuthService {

  user:ReplaySubject<User>=new ReplaySubject<User>(1)
  businessSettings: ReplaySubject<BusinessSettings> = new ReplaySubject<BusinessSettings>(1);
  permissions: ReplaySubject<SubUser> = new ReplaySubject<SubUser>(1);

  constructor(
    private router: Router, 
    private http:Http, 
    private snackBar:MatSnackBar,
    private auth:AngularFireAuth,
    private businessSettingService: BusinesssettingService,
    private permissionService: SubUserService) {
  }

  Login(formData)
  {

    return this.auth.auth.signInWithEmailAndPassword(formData.value.email,formData.value.password).then(data=>{

      var userData={
        id:data.user.uid
      }

      this.http.post("/users/authenticate",userData).subscribe(res=>
      {        
        this.user.next(res.json().result);
        localStorage.setItem("rtcuieo",res.json().token)
        this.businessSettingService.getBusinessSettings(res.json().result[0]).subscribe(res => {
          this.businessSettings.next(res[0]);
        })
        this.permissionService.getSubUser(res.json().result[0]).subscribe(res=>{
          this.permissions.next(res)
        })               
        this.router.navigate(['/pages']);
      })

      return true;

    }).catch(()=>{
        
        // this.snackBar.open('Login failed: Incorrect username/password','X', {
        //   duration: 5000,
        //   verticalPosition: 'bottom',
        //   panelClass: "success-dialog"
        // })

        return false;

    })
    
  }
  deactivateUser(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/users/active',temp,{headers:headers}).map(res => res.json());
  }

  retrieveOwners(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/users/retrieve',temp,{headers:headers}).map(res=>res.json());
  }

  registerOwner(temp:any):Promise<any>
  {
   
    console.log(temp);
    
    return this.auth.auth.createUserWithEmailAndPassword(temp.value.email,temp.value.password).then((data)=>{
      this.snackBar.open('User created','',{duration:3000})
      return data;
    }).catch(err=>{
      this.snackBar.open('Email ID already exists','',{duration:3000})
    });
      
  }
  
  createOwner(temp)
  {
    return this.http.post('/users/registerOwner',temp).map(res=>res.json());
  }

  isAuthenticated():boolean{
    return this.auth.authState!=null
  }

  registerUsers(temp:any):Promise<any>
  {

    return this.auth.auth.createUserWithEmailAndPassword(temp.email,temp.password).then((data)=>{
      this.snackBar.open('User created','',{duration:3000})
      return data;
    }).catch(err=>{
      this.snackBar.open('Email ID already exists','',{duration:3000})
    });

  }

  changePassword(email:string)
  {
    return this.auth.auth.sendPasswordResetEmail(email,{url:'http://www.yourfleetman.com/#/login'})
  }

  changeBusinessSettings(temp)
  {
    console.log(temp)
    this.businessSettings.next(temp)
  }

  revalidate()
  {
    
    var temp ={
        token:localStorage.getItem("rtcuieo")
      }

    this.http.post("/users/validate",temp).toPromise().then(res=>
    {
        this.user.next(res.json().result);
        localStorage.setItem("rtcuieo",res.json().token)
        this.businessSettingService.getBusinessSettings(res.json().result[0]).subscribe(res => {
          this.businessSettings.next(res[0]);
        })
        this.permissionService.getSubUser(res.json().result[0]).subscribe(res=>{
          this.permissions.next(res)
        })
    }).catch(()=>{
      this.snackBar.open('Session Expired. Please login again','X', {
        verticalPosition: 'top',
        panelClass: "success-dialog"
      })

      this.signOut();
    })
  }

  retrieveUserById(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/users/retrieveUserById',temp,{headers:headers}).map(res => res.json());
  }

  verifyPassword(password)
  {
    var credential = firebase.auth.EmailAuthProvider.credential(
      firebase.auth().currentUser.email,
      password
    );
    return this.auth.auth.currentUser.reauthenticateAndRetrieveDataWithCredential(credential)
  }

  changePasswordFromApp(temp)
  {
    return this.http.post('/users/changePassword',temp).map(res=>res.json())
  }

  getAuth() { 
    return this.auth.auth; 
  }

  myProfile(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/users/myProfile',temp,{headers:headers}).map(res=>res.json());
  }

  EditMyProfile(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/users/editMyProfile',temp,{headers:headers}).map(res=>res.json());
  }

  EditMyProfileOwner(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/users/editMyProfileOwner',temp,{headers:headers}).map(res=>res.json());
  }

  async signOut(){
    await this.auth.auth.signOut();
    localStorage.removeItem("rtcuieo");
    this.router.navigate(['login']).then(()=>{
      window.location.reload()
    });
  }

  roleBasedAuth(expectedRole) {
    console.log(expectedRole);
    console.log(this.permissions);
  }

}
