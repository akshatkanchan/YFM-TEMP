import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    
    const expectedRole = _route.data.expectedRole
    if(localStorage.getItem("rtcuieo") && this.auth.isAuthenticated() || this.auth.roleBasedAuth(expectedRole))
    {
      return true;
    }
    else
    {
      this.router.navigate(['login'])
    }    
  }


  constructor(private router: Router, private auth:AuthService) { 
  }


}