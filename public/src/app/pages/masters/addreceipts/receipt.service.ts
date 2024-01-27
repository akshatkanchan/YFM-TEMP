import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '../../../../../node_modules/@angular/http';
import { Receipt } from './receipt';

@Injectable()
export class ReceiptService {

  receipts: Observable<Receipt[]>;
  
  currUser:string;
  constructor(private http:Http) {

  }

addReceipt(receipt: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/add',receipt,{headers:headers}).map(res=>res.json());
}

addHotelReceipt(receipt: any) {
  console.log("service")
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addHotel',receipt,{headers:headers}).map(res=>res.json());
}

addFlightReceipt(receipt: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addFlight',receipt,{headers:headers}).map(res=>res.json());
}

addVisaReceipt(receipt: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addVisa',receipt,{headers:headers}).map(res=>res.json());
}

addPurchasePayment(receipt: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addPurchasePayments',receipt,{headers:headers}).map(res=>res.json());
}

addInvoices(temp: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addInvoices',temp,{headers:headers}).map(res=>res.json());
}

addHotelInvoices(temp: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addHotelInvoices',temp,{headers:headers}).map(res=>res.json());
}

addFlightInvoices(temp: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addFlightInvoices',temp,{headers:headers}).map(res=>res.json());
}

addVisaInvoices(temp: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addVisaInvoices',temp,{headers:headers}).map(res=>res.json());
}

addPurchaseInvoices(temp: any) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/addPurchaseInvoices',temp,{headers:headers}).map(res=>res.json());
}

deleteReceipt(Receipt: Receipt) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/delete',Receipt,{headers:headers}).map(res=>res.json());
}

updateReceipt(Receipt: Receipt) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  this.http.post('/receipts/update',Receipt,{headers:headers}).subscribe(res=>res);
}

getInvoiceInReceipts(temp) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveInvoiceInReceipts',temp,{headers:headers}).map(res => res.json());
}

getInvoiceInHotelReceipts(temp) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveInvoiceInHotelReceipts',temp,{headers:headers}).map(res => res.json());
}

getInvoiceInFlightReceipts(temp) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveInvoiceInFlightReceipts',temp,{headers:headers}).map(res => res.json());
}

getInvoiceInVisaReceipts(temp) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveInvoiceInVisaReceipts',temp,{headers:headers}).map(res => res.json());
}

getInvoiceInPurchasePayments(temp) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveInvoiceInPurchasePayments',temp,{headers:headers}).map(res => res.json());
}

getReceipt(temp){
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieve',temp,{headers:headers}).map(res => res.json());
}

getHotelReceipt(temp){
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveHotels',temp,{headers:headers}).map(res => res.json());
}

getFlightReceipt(temp){
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveFlights',temp,{headers:headers}).map(res => res.json());
}

getVisaReceipt(temp){
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveVisa',temp,{headers:headers}).map(res => res.json());
}

getPurchasePayments(temp){
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrievePurchasePayments',temp,{headers:headers}).map(res => res.json());
}

getInvoiceInPurchasePaymentsByIds(temp) {
  let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/receipts/retrieveInvoiceInPurchasePaymentsByIds',temp,{headers:headers}).map(res => res.json());
}

}
