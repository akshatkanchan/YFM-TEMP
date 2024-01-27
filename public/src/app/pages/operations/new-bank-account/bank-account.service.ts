import { Injectable } from '@angular/core';
import { BankAccount } from './bank-account';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../core/auth.service';
import { Http,Headers } from '@angular/http';

@Injectable()
export class BankAccountService {
  
  bankAccounts: Observable<BankAccount[]>;
  currUser:string;
  constructor(private http:Http,private auth:AuthService) {
   }
addBankAccount(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post("/bankAccounts/add",temp,{headers:headers}).map(data=>data.json())
}
deleteBankAccount(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post("/bankAccounts/delete",temp,{headers:headers}).map(data=>data.json())
}
updateBankAccount(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post("/bankAccounts/update",temp,{headers:headers}).map(data=>data.json())
}
getBankAccount(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post("/bankAccounts/retrieve",temp,{headers:headers}).map(data=>data.json());
}

}

