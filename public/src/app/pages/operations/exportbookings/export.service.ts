import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ExportService {

  constructor(private http:Http) { }

  addExportBookingProfile(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/exportExcel/addExportBookingProfiles',temp,{headers:headers}).map(res=>res.json());
  }

  addExportDutyProfile(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/exportExcel/addExportDutyProfiles',temp,{headers:headers}).map(res=>res.json());
  }

  getExportBookingProfile(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/exportExcel/retrieveExportBookingProfiles',temp,{headers:headers}).map(res=>res.json());
  }

  getExportDutyProfile(temp) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/exportExcel/retrieveExportDutyProfiles',temp,{headers:headers}).map(res=>res.json());
  }
}
