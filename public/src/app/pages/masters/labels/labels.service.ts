import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class LabelsService {

  constructor(private http:Http) { }
  getLabels(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/label/retrieve',temp,{headers:headers}).map(res=>res.json())
  }
  addLabels(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/label/add',temp,{headers:headers}).map(res=>res.json())
  }
  deleteLabels(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/label/delete',temp,{headers:headers}).map(res=>res.json())
  }

}
