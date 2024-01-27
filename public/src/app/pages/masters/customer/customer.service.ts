import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CustomerService {
  
  customers: Observable<Customer[]>;
  
  currUser:string;
  constructor(private http:Http) {

  }
  addCustomer(customer: Customer) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/add',customer,{headers:headers}).map(res=>res.json());
  }
  addCustomerLimitCity(temp){    
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/addCustomerLimitCity',temp,{headers:headers}).map(res=>res.json());
  }  
  addCustomerLimitVehicleGroup(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/addCustomerLimitVehicleGroup',temp,{headers:headers}).map(res=>res.json());
  }
  addCustomerLimitDutyType(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/addCustomerLimitDutyType',temp,{headers:headers}).map(res=>res.json());
  }
  deleteCustomer(customer: Customer) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/delete',customer,{headers:headers}).map(res=>res.json());
  }
  deleteCustomerLimitCity(suppliers) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/deleteCustomerLimitCity',suppliers,{headers:headers}).map(res=>res.json());
  }
  deleteCustomerLimitVehicleGroup(suppliers) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/deleteCustomerLimitVehicleGroup',suppliers,{headers:headers}).map(res=>res.json());
  }
  deleteCustomerLimitDutyType(suppliers) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/deleteCustomerLimitDutyType',suppliers,{headers:headers}).map(res=>res.json());
  }
  updateCustomer(customer: Customer) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/update',customer,{headers:headers}).map(res=>res.json());
  }
  updateCustomerLimitCity(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/updateCustomerLimitCity',temp,{headers:headers}).map(res=>res.json());
  }
  updateCustomerLimitVehicleGroup(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/updateCustomerLimitVehicleGroup',temp,{headers:headers}).map(res=>res.json());
  }
  updateCustomerLimitDutyType(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/updateCustomerLimitDutyType',temp,{headers:headers}).map(res=>res.json());
  }
  getCustomers(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieve',temp,{headers:headers}).map(res => res.json());
  }
  getCustomerLimitCity(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveCustomerLimitCity',temp,{headers:headers}).map(res => res.json());
  }
  getCustomerLimitVehicleGroup(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveCustomerLimitVehicleGroup',temp,{headers:headers}).map(res => res.json());
  }
  getCustomerLimitVehicleGroupForBookings(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveCustomerLimitVehicleGroupForBookings',temp,{headers:headers}).map(res => res.json());
  }
  getCustomerLimitDutyType(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveCustomerLimitDutyType',temp,{headers:headers}).map(res => res.json());
  }
  getCustomerLimitDutyTypeForBookings(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveCustomerLimitDutyTypeForBookings',temp,{headers:headers}).map(res => res.json());
  }
  getB2BCustomers(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveB2BCustomers',temp,{headers:headers}).map(res => res.json());
  }
  getCustomerCount(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/count',temp,{headers:headers}).map(res => res.json());
  }
  getSingleCustomer(temp){
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveOneCustomer',temp,{headers:headers}).map(res => res.json());
  }
  getCustomersById(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveByGroupId',temp,{headers:headers}).map(res => res.json());
  }
  getCustomerId(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/retrieveCustomerId',temp,{headers:headers}).map(res => res.json());
  }
  deactivateCustomer(temp) {
    let headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/customers/active',temp,{headers:headers}).map(res => res.json());
  }

}
