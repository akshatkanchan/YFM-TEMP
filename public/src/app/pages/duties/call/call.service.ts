import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CallService {

  constructor(private http:Http) { }

  sendSMS(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/sendSMS',temp,{headers:headers}).map(res => res.json());
  }

  sendWhatsApp(temp)
  {
    console.log(temp);
    
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/sendWhatsApp',temp,{headers:headers}).map(res => res.json());
  }

  getAllPassengers(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getAllPassengers',temp,{headers:headers}).map(res => res.json());
  }

  getAllBookedBy(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getAllBookedBy',temp,{headers:headers}).map(res => res.json());
  }

  insertLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/insertContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  insertBookingCount(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/insertBookingCount',temp,{headers:headers}).map(res => res.json());
  }

  insertHotelBookingLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/insertHotelBookingContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  insertBookingLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/insertBookingContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  insertFlightBookingLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/insertFlightBookingContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  insertVisaLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/insertVisaContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  getLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  getHotelBookingLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getHotelBookingContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  getBookingLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getBookingContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  getFlightBookingLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getFlightBookingContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  getVisaLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getVisaContactLogs',temp,{headers:headers}).map(res => res.json());
  }

  insertCount(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/insertContactCount',temp,{headers:headers}).map(res => res.json());
  }

  getSMSCount(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getSMSCount',temp,{headers:headers}).map(res => res.json());
  }

  getWhatsAppCount(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getWhatsAppCount',temp,{headers:headers}).map(res => res.json());
  }

  getCallCount(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getCallCount',temp,{headers:headers}).map(res => res.json());
  }

  getBookingCount(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/getBookingCount',temp,{headers:headers}).map(res => res.json());
  }

  checkDevice(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/checkDevice',temp,{headers:headers}).map(res => res.json());
  }

  makeCall(temp)
  {
    var headers = new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/makeAppCall',temp,{headers:headers}).map(res => res.json());
  }

  unsubscribe(temp)
  {
    var headers = new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/Voip/unsubscribeTopic',temp,{headers:headers}).map(res => res.json());
  }
}
