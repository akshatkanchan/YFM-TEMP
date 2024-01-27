import { Injectable } from '@angular/core';
import {DutyType} from './duty-type';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http,Headers } from '../../../../../node_modules/@angular/http';

@Injectable()
export class DutyTypeService {
  
  dutyTypes: Observable<DutyType[]>;
  currUser:string;

  constructor(private http:Http) {

  }

  addDutyType(dutyType: DutyType) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dutyType/add',dutyType,{headers:headers}).map(res=>res.json());
  }

  deleteDutyType(dutyType: DutyType) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dutyType/delete',dutyType,{headers:headers}).map(res=>res.json());
  }

  updateDutyType(dutyType: DutyType) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dutyType/update',dutyType,{headers:headers}).map(res=>res.json());
  }
  
  getDutyType(temp) {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dutyType/retrieve',temp,{headers:headers}).map(res => res.json());
  }
  getDutyTypeofSupplier(temp){
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/dutyType/retrieveSupplierDutyType',temp,{headers:headers}).map(res => res.json());
  }

}
