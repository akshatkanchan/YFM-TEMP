/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';
import { NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,
    private menuService:NbMenuService,
    ) {

  }

  ngOnInit(): void {
    
    if(localStorage.getItem("rtcuieo") && this.auth.isAuthenticated())
    {
        this.auth.revalidate()
    }

    this.menuService.onItemClick().subscribe(( event ) => {
      this.onItemSelection(event.item.title);
    })

  }

  onItemSelection( title ) {

    if ( title === 'Logout' ) {
      this.auth.signOut()
    }
    if (title === 'Business Settings')
    {
      this.router.navigate(['/pages/circles/businesssetting']);      
    }
    if( title === 'Company Profile')
    {
      this.router.navigate(['/pages/circles/companyprofile']);
    }
    if( title === 'My Profile')
    {
      this.router.navigate(['/pages/masters/myprofile']);
    }
    
  }

}
