import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class CircleService {

  constructor(private http:Http) { }

  getUsers(tempId) { 
    var temp = {
      ownerId:tempId
    };
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrieve',temp,{headers:headers}).map(res=>res.json());
  }
  getRequests(tempId) { 
    var temp = {
      ownerId:tempId
    };
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrieveRequests',temp,{headers:headers}).map(res=>res.json());
  }
  sendRequest(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/sendRequest',temp,{headers:headers}).map(res=>res.json());
  }
  sendRequestAgain(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/sendRequestAgain',temp,{headers:headers}).map(res=>res.json());
  }
  sendDutyRequest(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/sendDutyRequest',temp,{headers:headers}).map(res=>res.json());
  }
  acceptRequest(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/acceptRequest',temp,{headers:headers}).map(res=>res.json());
  }
  declineRequest(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/declineRequest',temp,{headers:headers}).map(res=>res.json());
  }
  getCircle(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/getCircle',temp,{headers:headers}).map(res=>res.json());
  }
  getClients(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/getClients',temp,{headers:headers}).map(res=>res.json());
  }
  getreceivedDuty(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrieveReceivedDuty',temp,{headers:headers}).map(res=>res.json());
  }
  getCompletedReceivedDuty(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrieveCompletedReceivedDuty',temp,{headers:headers}).map(res=>res.json());
  }
  getSentDuty(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrieveSentDuty',temp,{headers:headers}).map(res=>res.json());
  }
  getPurchaseDuty(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrievePurchaseDuty',temp,{headers:headers}).map(res=>res.json());
  }
  getPurchaseDutyTypePrice(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrievePurchaseDutyTypePrice',temp,{headers:headers}).map(res=>res.json());
  }
  acceptDuty(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/acceptDuty',temp,{headers:headers}).map(res=>res.json());
  }
  declineDuty(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/declineDuty',temp,{headers:headers}).map(res=>res.json());
  }
  filterByDate(temp:any) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/circles/retrievePurchaseDutyByDate',temp,{headers:headers}).map(res=>res.json());
  }
}
