import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class WalletService {

  constructor(private http:Http) { }

  addNewWallet(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/wallet/addWallet',temp,{headers:headers}).map(res=>res.json());
  }
  getWalletAmount(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/wallet/retrieve',temp,{headers:headers}).map(res=>res.json());
  }

  updateWalletAmount(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/wallet/addMoney',temp,{headers:headers}).map(res=>res.json());
  }

  addDepositTransaction(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/wallet/addDepositTransaction',temp,{headers:headers}).map(res=>res.json());
  }

  getDepositTransaction(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/wallet/retrieveDepositTransactions',temp,{headers:headers}).map(res=>res.json());
  }

  addWalletTransaction(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/wallet/addwalletTransaction',temp,{headers:headers}).map(res=>res.json());
  }

  getWalletTransaction(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/wallet/retrieveWalletTransactions',temp,{headers:headers}).map(res=>res.json());
  }

}
