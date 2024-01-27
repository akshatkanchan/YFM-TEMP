import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class NotificationService {

  constructor(private http:Http) {

  }

  getAllNotifications(date) {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/notifications/retreive',date,{headers:headers}).map(res=>res.json());
  }

  getRecentNotifications(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/notifications/getRecentNotifications',temp,{headers:headers}).map(res=>res.json());
  }

  setReadNotification(temp)
  {
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/notifications/setReadNotification',temp,{headers:headers}).map(res=>res.json());
  }
  
  getUnreadCount(temp){
    var headers= new Headers({'Authorization':localStorage.getItem('rtcuieo')})
    return this.http.post('/notifications/getUnreadCount',temp,{headers:headers}).map(res=>res.json());
  }
}
