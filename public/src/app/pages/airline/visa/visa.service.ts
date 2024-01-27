import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class VisaService {

  constructor(private http: Http) { }

  getVisa(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/retrieve',temp,{headers:headers}).map(res => res.json());
  }

  getVisaTravellers(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/retrieveTravellers',temp,{headers:headers}).map(res => res.json());
  }

  getVisaByCustomer(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/retrieveVisaByCustomer',temp,{headers:headers}).map(res => res.json());
  }

  addVisa(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/add',temp,{headers:headers}).map(res => res.json());
  }

  addTraveller(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/addTravellers',temp,{headers:headers}).map(res => res.json());
  }

  updateVisa(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/update',temp,{headers:headers}).map(res => res.json());
  }

  updateTraveller(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/updateTraveller',temp,{headers:headers}).map(res => res.json());
  }

  deleteVisa(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/delete',temp,{headers:headers}).map(res => res.json());
  }

  deleteVisaTraveller(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/visa/deleteTraveller',temp,{headers:headers}).map(res => res.json());
  }


  addVisaFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/addVisaFiles',temp,{headers:headers}).map(res => res.json());
  }

  getVisaFiles(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/bookings/getVisaFiles',temp,{headers:headers}).map(res => res.json());
  }

}
