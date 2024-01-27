import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ExpensesService {

  constructor(private http:Http) { }

  getOfficeExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/retrieveOfficeExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  getOfficeExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/retrieveOfficeExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  getVehicleBreakdownExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/retrieveVehicleBreakdownExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  getVehicleBreakdownExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/retrieveVehicleBreakdownExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  getVehicleMaintenanceExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/retrieveVehicleMaintenanceExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  getVehicleMaintenanceExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/retrieveVehicleMaintenanceExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  updateOfficeExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/updateOfficeExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  updateOfficeExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/updateOfficeExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  updateVehicleBreakdownExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/updateVehicleBreakdownExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  updateVehicleBreakdownExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/updateVehicleBreakdownExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  updateVehicleMaintenanceExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/updateVehicleMaintenanceExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  updateVehicleMaintenanceExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/updateVehicleMaintenanceExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  deleteOfficeExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/deleteOfficeExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  deleteOfficeExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/deleteOfficeExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  deleteVehicleBreakdownExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/deleteVehicleBreakdownExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  deleteVehicleBreakdownExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/deleteVehicleBreakdownExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  deleteVehicleMaintenanceExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/deleteVehicleMaintenanceExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  deleteVehicleMaintenanceExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/deleteVehicleMaintenanceExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  addOfficeExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/addOfficeExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  addOfficeExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/addOfficeExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  addVehicleBreakdownExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/addVehicleBreakdownExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  addVehicleBreakdownExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/addVehicleBreakdownExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

  addVehicleMaintenanceExpenses(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/addVehicleMaintenanceExpenses',temp,{headers:headers}).map(res=>res.json());
  }

  addVehicleMaintenanceExpensesData(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/expenses/addVehicleMaintenanceExpensesData',temp,{headers:headers}).map(res=>res.json());
  }

}
