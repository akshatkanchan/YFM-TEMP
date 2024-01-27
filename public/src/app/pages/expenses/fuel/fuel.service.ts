import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class FuelService {

  constructor(private http:Http) { }

  addFuel(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/fuel/add',temp,{headers:headers}).map(res=>res.json());
  }

  getFuel(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/fuel/retrieve',temp,{headers:headers}).map(res => res.json());
  }

  getCurrentKms(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/fuel/retrieveCurrentKMS',temp,{headers:headers}).map(res => res.json());
  }

  deleteFuel(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/fuel/delete',temp,{headers:headers}).map(res=>res.json());
  }

  updateFuel(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/fuel/update',temp,{headers:headers}).map(res=>res.json());
  }
}
