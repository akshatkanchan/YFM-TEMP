import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ActivitylogService {

  constructor(private http:Http) { }

  addBookingLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addBookingLogs',temp,{headers:headers}).map(res => res.json());
  }

  getBookingLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getBookingLogs',temp,{headers:headers}).map(res => res.json());
  }

  addFlightLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addFlightLogs',temp,{headers:headers}).map(res => res.json());
  }

  getFlightLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getFlightLogs',temp,{headers:headers}).map(res => res.json());
  }

  addHotelLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addHotelLogs',temp,{headers:headers}).map(res => res.json());
  }

  getHotelLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getHotelLogs',temp,{headers:headers}).map(res => res.json());
  }

  addVisaLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addVisaLogs',temp,{headers:headers}).map(res => res.json());
  }

  getVisaLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getVisaLogs',temp,{headers:headers}).map(res => res.json());
  }

  addCustomerLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addCustomerLogs',temp,{headers:headers}).map(res => res.json());
  }

  getCustomerLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getCustomerLogs',temp,{headers:headers}).map(res => res.json());
  }

  addEmployeeLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addEmployeeLogs',temp,{headers:headers}).map(res => res.json());
  }

  getEmployeeLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getEmployeeLogs',temp,{headers:headers}).map(res => res.json());
  }

  addDriverLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addDriverLogs',temp,{headers:headers}).map(res => res.json());
  }

  getDriverLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getDriverLogs',temp,{headers:headers}).map(res => res.json());
  }

  addSupplierLogs(temp)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/addSupplierLogs',temp,{headers:headers}).map(res => res.json());
  }

  getSupplierLogs(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/activityLogs/getSupplierLogs',temp,{headers:headers}).map(res => res.json());
  }

}
