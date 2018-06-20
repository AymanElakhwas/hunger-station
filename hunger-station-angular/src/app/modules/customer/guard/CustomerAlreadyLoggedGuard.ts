import { Injectable } from '@angular/core';
import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router } from '@angular/router';
import { Observable } from 'rxjs';

import {CustomerAuthenticationService} from '../services/customer-authentication-service';

@Injectable()
export class CustomerAlreadyLoggedGuard implements CanActivate {

  constructor(private router: Router, private authServ: CustomerAuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let loginStatus = this.authServ.loggedIn();
    //   console.log('Login Status: ' + loginStatus);
      if(loginStatus){
        this.router.navigate(['customer-home']);
      }else{
        return true;
      }

  }
}
