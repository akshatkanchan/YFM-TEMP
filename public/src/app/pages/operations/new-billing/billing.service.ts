import { Injectable } from '@angular/core';
import { Billing } from './billing';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

@Injectable()
export class BillingService {

  billings: Observable<Billing[]>;
  
  constructor(private http:Http) {
    
   }
addBilling(temp) {
  console.log(temp)
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/billingItem/add',temp,{headers:headers}).map(res=>res.json());
}

deleteBilling(billing: Billing) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/billingItem/delete',billing,{headers:headers}).map(res=>res.json());
}

updateBilling(billing: Billing) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/billingItem/update',billing,{headers:headers}).map(res=>res.json());
}

getBilling(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/billingItem/retrieve',temp,{headers:headers}).map(res=>res.json());
}

}
