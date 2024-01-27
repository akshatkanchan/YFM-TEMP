import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { User } from '../../../core/user';
import { AuthService } from '../../../core/auth.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificationOption = "Today";
  user : User={};
  notifications:any = [];

  constructor(private notificationService: NotificationService, private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.auth.user.subscribe(data=>{
      this.user=data[0]
      this.setNotification('Today')
    })
  }

  setNotification(temp) {
    if(temp =='Today')
    {
      this.notificationOption='Today'
      var date= moment().format('YYYY-MM-DD')
      var params = {
        startDate: date,
        endDate: date,
        ownerId: this.user.ownerId
      }
      this.notificationService.getAllNotifications(params).subscribe(data=>
      {
          this.notifications=data
      })
    }
    if(temp=='Yesterday')
    {
      this.notificationOption='Yesterday'
      var date= moment().subtract(1,'days').format('YYYY-MM-DD')
      var params = {
        startDate: date,
        endDate: date,
        ownerId: this.user.ownerId
      }
      this.notificationService.getAllNotifications(params).subscribe(data=>
      {
          this.notifications=data
      })
    }
    if(temp=='Past 7 days')
    {
      this.notificationOption='Past 7 days'
      var startDate = moment().format('YYYY-MM-DD')
      var endDate = moment().subtract(7,'days').format('YYYY-MM-DD')
      var params = {
        startDate: startDate,
        endDate: endDate,
        ownerId: this.user.ownerId
      }
      this.notificationService.getAllNotifications(params).subscribe(data=>
      {
          this.notifications=data
      })
    }
  }
  
  route(url,id)
  {
    var noti={
      id:id
    }
    this.notificationService.setReadNotification(noti).subscribe()
    this.router.navigate([url])
    // console.log(url)
  }

}
