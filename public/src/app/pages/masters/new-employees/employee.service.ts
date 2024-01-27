import { Injectable } from '@angular/core';
import {Employee} from './employee';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '../../../../../node_modules/@angular/http';
import { AuthService } from '../../../core/auth.service';

@Injectable()
export class EmployeeService {
  
  employees: Observable<Employee[]>;
  
  currUser:string;
  constructor(private auth:AuthService,private http:Http) {  }

  addEmployee(employees: Employee) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/add',employees,{headers:headers}).map(res=>res.json());
  }

  addEmployeeLimitCustomer(employees) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
      return this.http.post('/employees/addLimitCustomer',employees,{headers:headers}).map(res=>res.json());
    }

  deleteEmployee(employees: Employee) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/delete',employees,{headers:headers}).map(res=>res.json());
  }

  deleteEmployeeLimitCustomer(employees) {
    console.log("delete");
    
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/deleteLimitCustomer',employees,{headers:headers}).map(res=>res.json());
  }

  updateEmployee(employees: Employee) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/update',employees,{headers:headers}).map(res=>res.json());
  }

  updateEmployeeLimitCustomer(employees) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/updateLimitCustomer',employees,{headers:headers}).map(res=>res.json());
  }

  getEmployee(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/retrieve',temp,{headers:headers}).map(res=>res.json());
  }

  getEmployeeForCustomer(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/retrieveForCustomer',temp,{headers:headers}).map(res=>res.json());
  }

  getEmployeeLimitCustomer(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/retrieveLimitCustomer',temp,{headers:headers}).map(res=>res.json());
  }

  getEmployeeLimitCustomerForEmployee(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/retrieveLimitCustomerForEmployee',temp,{headers:headers}).map(res=>res.json());
  }
  
  deactivateEmployee(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/employees/active',temp,{headers:headers}).map(res=>res.json());
  }

}
