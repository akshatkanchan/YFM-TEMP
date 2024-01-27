import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class BusinesssettingService {

  constructor(private http:Http) { }

  getBusinessSettings(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/retrieve',temp,{headers:headers}).map(res=>res.json());
  }

  getDriverAllowances(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/retrieveDriverAllowance',temp,{headers:headers}).map(res=>res.json());
  }

  getChargedDriverAllowances(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/retrieveChargedDriverAllowance',temp,{headers:headers}).map(res=>res.json());
  }

  getSMSPhoneNumbers(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/retrieveSMSPhoneNumbers',temp,{headers:headers}).map(res=>res.json());
  }

  getEmailAddresses(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/retrieveEmailAddresses',temp,{headers:headers}).map(res=>res.json());
  }

  addBusinessSettings(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/add',temp,{headers:headers}).map(res=>res.json());
  }

  addDriverAllowances(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/addDriverAllowance',temp,{headers:headers}).map(res=>res.json());
  }

  addSMSPhoneNumbers(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/addSMSPhoneNumbers',temp,{headers:headers}).map(res=>res.json());
  }

  addEmailAddresses(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/addEmailAddresses',temp,{headers:headers}).map(res=>res.json());
  }

  updateBusinessSettings(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/update',temp,{headers:headers}).map(res=>res.json());
  }

  updateDriverAllowances(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/updateDriverAllowance',temp,{headers:headers}).map(res=>res.json());
  }

  updateSMSPhoneNumbers(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/updateSMSPhoneNumbers',temp,{headers:headers}).map(res=>res.json());
  }

  updateEmailAddresses(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/updateEmailAddresses',temp,{headers:headers}).map(res=>res.json());
  }

  deleteDriverAllowances(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/deleteDriverAllowance',temp,{headers:headers}).map(res=>res.json());
  }

  deleteSMSPhoneNumbers(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/deleteSMSPhoneNumbers',temp,{headers:headers}).map(res=>res.json());
  }

  deleteEmailAddresses(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/businessSettings/deleteEmailAddresses',temp,{headers:headers}).map(res=>res.json());
  }

}
