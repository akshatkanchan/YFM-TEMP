import { Injectable } from '@angular/core';
import { Purchase } from './purchase';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PurchaseService {

  purchases: Observable<Purchase[]>;
  currUser:string;

  constructor(private http:Http) {

   }
   
addPurchase(purchase: Purchase) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  this.http.post('/purchase/add',purchase,{headers:headers}).subscribe(res=>res);
}
deletePurchase(purchase: Purchase) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  this.http.post('/purchase/delete',purchase,{headers:headers}).subscribe(res=>res);
}
updatePurchase(purchase: Purchase) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  this.http.post('/purchase/update',purchase,{headers:headers}).subscribe(res=>res);
}
getPurchase() {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.get('/purchase/retrieve', {headers: headers}).map(res => res.json());
}

}
