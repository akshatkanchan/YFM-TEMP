import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/user';
import { Router } from '@angular/router';
import { NotificationService } from '../../../pages/masters/notifications/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagingService } from '../../../messaging.service';
import { SubUser } from '../../../pages/masters/sub-users/sub-user';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit , AfterViewInit {

  @Input() position = 'normal';

  screenWidth:any;

  selectValue="Quick Links"

  user: User={};
  permission:SubUser={};
  notifications:any=[]

  items=[{title:'My Profile'},{title:'Business Settings'},{title:'Company Profile'},{title:'Logout'}]

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private msgService: MessagingService,
              private snackBar:MatSnackBar,
              private router:Router,
              private notificationService:NotificationService,
              private auth:AuthService) {
                
                // this.onResize();
  }

  ngOnInit() {

    this.auth.user.subscribe(data=>
      {
        this.user=data[0]
        this.notificationService.getRecentNotifications(this.user).subscribe(data=>{
          // console.log(data)
          // console.log(data.length)
          this.notifications=data
        });

        this.notificationService.getUnreadCount(this.user).subscribe(data=>{
          // console.log(data)
          // console.log(data.length)
          this.notificationCount=data[0].count
        });
        this.auth.permissions.subscribe(data=>{
          this.permission=data[0]
          if(this.permission.viewBusinessSetting === 0) {
            let index=this.items.findIndex(x=>x.title === "Business Settings")
            this.items.splice(index,1);
          } if(this.permission.editCompanyInfo === 0) {
            let index = this.items.findIndex(x=>x.title === "Company Profile")
            this.items.splice(index,1);
          }
        })
      });

    this.screenWidth = window.innerWidth;

    if(this.screenWidth<480)
    {
      this.menuService.addItems([{
        title: 'Profile',
        icon:'nb-person',
        children:[
          {
            title: 'My Profile',
            link: '/pages/masters/myprofile'
          },
          {
          title: 'Company Profile',
          link:'/pages/circles/companyprofile'
          },
          {
            title:'Business Settings',
            link:'/pages/circles/businesssetting'
          },
          {
            title: 'Logout'
          }
      ]
      }])
    }
  }

  showAllNotifications()
  {
    this.router.navigate(['/pages/masters/notifications'])
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  rowColor(status)
  {
    if(status=='Read')
    {
      return '#9acd3287';
    }
    else
    {
      return 'white';
    }
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  previousUrl:string;
  message;
  callFrom:any;
  notificationCount : number = 0;

  ngAfterViewInit(): void {

      this.msgService.getPermission()
      this.msgService.receiveMessage()
      this.message = this.msgService.currentMessage
      this.message.subscribe(payload=>{

        if(payload!=null && payload!=undefined && payload!='')
        {
          // console.log(payload)
          // this.snackBar.open("Call from "+this.callFrom,"Show",{
          //   duration: 10000,
          // }).onAction().subscribe(payload=>{        
          //   window.open("http://localhost:8080/#/pages/bookinganddutydisplay");
          //   localStorage.setItem('callpayload', this.callFrom);
          // })

          if(payload.notification.body != null && payload.notification.body != undefined && payload.notification.body !='' )
          {
            this.snackBar.open(payload.notification.body,"x",{
              duration :3000,
              verticalPosition : 'top',
              horizontalPosition : 'right'
            })
  
            this.notificationService.getRecentNotifications(this.user).subscribe(data=>{
              console.log(data)
              console.log(data.length)
              // this.notificationCount = data.length
            });

          }
        }    
      })
    
  }

  route(url,id)
  {
    var noti={
      id:id
    }
    this.notificationService.setReadNotification(noti).subscribe()
    console.log(url)
    this.router.navigate([url])
  }

  quickRoute(url)
  {
    this.router.navigate([url])
  }
}
