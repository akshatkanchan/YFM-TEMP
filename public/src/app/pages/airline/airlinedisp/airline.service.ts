import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ActivitylogService } from '../../../activitylog.service';

@Injectable()
export class AirlineService {

  constructor(private http: Http) { }

  addFlights(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/add',temp,{headers:headers}).map(res=>res.json());
  }

  getFlights(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/retrieve',temp,{headers:headers}).map(res =>res.json());
  }

  getFlightsAccordingToCustomer(temp){
    var temp1={
      customerId:temp
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/retrieveForInvoice',temp1,{headers:headers}).map(res => res.json());
  }

  getFlightsForInvoice(temp){
    var temp1={
      customerId:temp
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/retrieveForCreateInvoice',temp1,{headers:headers}).map(res => res.json());
  }

  deleteFlights(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/delete',temp,{headers:headers}).map(res=>res.json());
  }

  updateFlights(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/airline/update',temp,{headers:headers}).map(res=>res.json());
  }

  emailTicket(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/sendMailFlight',temp,{headers:headers}).map(res=>res.json());
  }


  addAirlineFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addAirlineFiles',temp,{headers:headers}).map(res => res.json());
  }

  getAirlineFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getAirlineFiles',temp,{headers:headers}).map(res => res.json());
  }

}
