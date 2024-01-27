import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Vehicle} from './vehicle';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '../../../../../node_modules/@angular/http';

@Injectable()
export class VehicleService {
  
  vehicles: Observable<Vehicle[]>;

  constructor(private http:Http) { }

  addVehicle(vehicles: Vehicle) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/add',vehicles,{headers:headers}).map(res=>res.json());
  }

  addVehiclePermit(vehicles: Vehicle) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/addPermits',vehicles,{headers:headers}).map(res=>res.json());
  }

  addVehicleFile(vehicles) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/addFiles',vehicles,{headers:headers}).map(res=>res.json());
  }

  deleteVehicle(vehicles: Vehicle) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/delete',vehicles,{headers:headers}).map(res=>res.json());
  }

  deleteVehiclePermit(vehicles: Vehicle) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/deletePermits',vehicles,{headers:headers}).map(res=>res.json());
  }

  deleteVehicleFile(vehicles) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/deleteFiles',vehicles,{headers:headers}).map(res=>res.json());
  }

  updateVehicle(vehicles: Vehicle) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/update',vehicles,{headers:headers}).map(res=>res.json());
  }

  updateVehiclePermit(vehicles: Vehicle) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/updatePermits',vehicles,{headers:headers}).map(res=>res.json());
  }

  updateVehicleFile(vehicles) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/updateFiles',vehicles,{headers:headers}).map(res=>res.json());
  }

  getVehicle(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/retrieve',temp,{headers:headers}).map(res=>res.json());
  }

  getVehiclePermit(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/retrievePermits',temp,{headers:headers}).map(res=>res.json());
  }

  getVehicleFile(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/retrieveFiles',temp,{headers:headers}).map(res=>res.json());
  }

  filterVehicleFromVehicleGroups(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/retrieveVehicleFromGroups',temp,{headers:headers}).map(res=>res.json());
  }

  getUniqueVehicle(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/retrieveUnique',temp,{headers:headers}).map(res=>res.json());
  }

  deactivateVehicle(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/active',temp,{headers:headers}).map(res => res.json());
  }

  getVehicleNumber(temp, temp2) {
    var data = {
      ownerId: temp,
      id: temp2
    }
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/vehicles/retrieveNumber',data,{headers:headers}).map(res=>res.json());
  }

}
