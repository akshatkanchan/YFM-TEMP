import { Injectable } from '@angular/core';
import {Supplier} from './supplier';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '../../../../../node_modules/@angular/http';

@Injectable()
export class SupplierService {
  
  suppliers:Observable<Supplier[]>;
  currUser:string;

  constructor(private http:Http) {

  }
   
addSupplier(suppliers: Supplier) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/add',suppliers,{headers:headers}).map(res=>res.json());
}

addSupplierLimitCity(temp){
  console.log("city")
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/addSupplierLimitCity',temp,{headers:headers}).map(res=>res.json());
}

addSupplierLimitVehicleGroup(temp){
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/addSupplierLimitVehicleGroup',temp,{headers:headers}).map(res=>res.json());
}

addSupplierLimitDutyType(temp){
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/addSupplierLimitDutyType',temp,{headers:headers}).map(res=>res.json());
}

deleteSupplier(suppliers: Supplier) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/delete',suppliers,{headers:headers}).map(res=>res.json());
}

deleteSupplierLimitCity(suppliers) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/deleteSupplierLimitCity',suppliers,{headers:headers}).map(res=>res.json());
}

deleteSupplierLimitVehicleGroup(suppliers) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/deleteSupplierLimitVehicleGroup',suppliers,{headers:headers}).map(res=>res.json());
}

deleteSupplierLimitDutyType(suppliers) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/deleteSupplierLimitDutyType',suppliers,{headers:headers}).map(res=>res.json());
}

updateSupplier(suppliers: Supplier) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/update',suppliers,{headers:headers}).map(res=>res.json());
}

updateSupplierLimitCity(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/updateSupplierLimitCity',temp,{headers:headers}).map(res=>res.json());
}

updateSupplierLimitVehicleGroup(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/updateSupplierLimitVehicleGroup',temp,{headers:headers}).map(res=>res.json());
}

updateSupplierLimitDutyType(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/updateSupplierLimitDutyType',temp,{headers:headers}).map(res=>res.json());
}

getSupplier(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/retrieve',temp,{headers:headers}).map(res => res.json());
}

getSupplierLimitCity(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/retrieveSupplierLimitCity',temp,{headers:headers}).map(res => res.json());
}

getSupplierLimitVehicleGroup(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/retrieveSupplierLimitVehicleGroup',temp,{headers:headers}).map(res => res.json());
}

getSupplierLimitDutyType(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/retrieveSupplierLimitDutyType',temp,{headers:headers}).map(res => res.json());
}

getDistinctSuppliers(temp) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/suppliers/retrieveDistinctSuppliers',temp,{headers:headers}).map(res => res.json());
}

}

