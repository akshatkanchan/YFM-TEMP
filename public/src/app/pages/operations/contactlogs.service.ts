import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class ContactlogsService {

  constructor(private http:Http) { }

  getDutyContactLogs(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/contactLogs/retrieveDuty',temp,{headers:headers}).map(res=>res.json());
  }
  getBookingsContactLogs(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/contactLogs/retrieveBookings',temp,{headers:headers}).map(res=>res.json());
  }
  getFlightContactLogs(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/contactLogs/retrieveFlight',temp,{headers:headers}).map(res=>res.json());
  }
  getHotelContactLogs(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/contactLogs/retrieveHotel',temp,{headers:headers}).map(res=>res.json());
  }
  getVisaContactLogs(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/contactLogs/retrieveVisa',temp,{headers:headers}).map(res=>res.json());
  }
}
