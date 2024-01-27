import { Injectable } from '@angular/core';
import { Driver } from './driver';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '../../../../../node_modules/@angular/http';

@Injectable()
export class DriverService {

  drivers: Observable<Driver[]>;
  constructor(private http:Http) {
  }

  addDriver(drivers: Driver) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/drivers/add',drivers,{headers:headers}).map(res=>res.json())
  }
  deleteDriver(drivers: Driver) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/drivers/delete',drivers,{headers:headers}).map(res=>res.json());
  }
  updateDriver(drivers: Driver) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/drivers/update',drivers,{headers:headers}).map(res=>res.json());
  }
  getDriver(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/drivers/retrieve',temp,{headers:headers}).map(res => res.json());
  }
  findDriver(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/drivers/find',temp,{headers:headers}).map(res => res.json());
  }
  deactivateDriver(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/drivers/active',temp,{headers:headers}).map(res => res.json());
  }

  getDriverLocation(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/tracking/getDriverTracker',temp,{headers:headers}).map(res => res.json());
  }

  getDriverForTracking(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/tracking/getDriversForTracker',temp,{headers:headers}).map(res => res.json());
  }

}
