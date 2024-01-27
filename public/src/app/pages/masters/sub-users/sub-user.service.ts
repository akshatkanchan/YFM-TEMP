import { Injectable } from '@angular/core';
import {SubUser} from './sub-user';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Headers, Http} from '@angular/http'

@Injectable()
export class SubUserService {
  
  subUsers: Observable<SubUser[]>;
  
  constructor(private http:Http) {
   }
   
addSubUser(subUser: SubUser) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/permission/add',subUser,{headers:headers}).subscribe(res=>res.json())
}
addPermission(permission){
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/permissionsProfile/add',permission,{headers:headers}).subscribe(res=>res.json())
}
getPermissionsProfiles(temp){
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/permissionsProfile/retrieve',temp,{headers:headers}).map(res=>res.json())
}
getPermissions(temp){
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/permissionsProfile/retrievePermission',temp,{headers:headers}).map(res=>res.json())
}
deleteSubUser(subUser: SubUser) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
 
}
updateSubUser(subUser: SubUser) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})

}
getSubUser(subUser) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
  return this.http.post('/permission/retrieve',subUser,{headers:headers}).map(res=>res.json())
}

getUser(user: SubUser) {
  var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
 
}

}



