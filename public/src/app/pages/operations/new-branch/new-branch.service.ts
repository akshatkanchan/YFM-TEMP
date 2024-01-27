import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class NewBranchService {

  constructor(private http:Http) { }
  getBranches(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/branches/retrieve",temp,{headers:headers}).map(data=>data.json())
  }
  addBranches(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/branches/add",temp,{headers:headers}).map(data=>data.json())
  }
  deleteBranches(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/branches/delete",temp,{headers:headers}).map(data=>data.json())
  }

  updateBranches(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post("/branches/update",temp,{headers:headers}).map(data=>data.json())
  }

}
