import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class CompanyprofileService {

  constructor(private http:Http) { }

  addCompanyProfile(temp:any)
  {
    console.log(temp)
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/companyProfile/add',temp,{headers:headers}).map(res=>res.json());
  }


  updateCompanyProfile(temp:any)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/companyProfile/update',temp,{headers:headers}).map(res=>res.json());
  }
  getCompanyProfile(temp:any)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/companyProfile/retrieve',temp,{headers:headers}).map(res=>res.json());
  }
}
