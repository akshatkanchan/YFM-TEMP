import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../../../core/auth.service';

@Injectable()
export class AdvancepaymentService {

  constructor(private http:Http,private auth:AuthService) { }

  getAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/retrieve",temp,{headers:headers}).map(data=>data.json())
  }

  addAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/add",temp,{headers:headers}).map(data=>data.json())
  }

  getFlightAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/retrieveFlight",temp,{headers:headers}).map(data=>data.json())
  }

  addFlightAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/addFlight",temp,{headers:headers}).map(data=>data.json())
  }

  getVisaAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/retrieveVisa",temp,{headers:headers}).map(data=>data.json())
  }

  addVisaAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/addVisa",temp,{headers:headers}).map(data=>data.json())
  }

  getHotelAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/retrieveHotel",temp,{headers:headers}).map(data=>data.json())
  }

  addHotelAdvancePayment(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/advancePayment/addHotel",temp,{headers:headers}).map(data=>data.json())
  }
}
