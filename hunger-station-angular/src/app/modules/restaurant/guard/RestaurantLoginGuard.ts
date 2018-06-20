import { Injectable } from '@angular/core';
import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router } from '@angular/router';
import { Observable } from 'rxjs';

import {RestaurantAuthenticationService} from '../service/restaurant-authentication-service';

@Injectable()
export class RestaurantLoginGuard implements CanActivate {

  constructor(private router: Router, private authServ: RestaurantAuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let loginStatus = this.authServ.loggedIn();
      console.log('Restaurant Login Status: ' + loginStatus);
      if(!loginStatus){
        this.router.navigate(['restaurant-login']);
      }else{
        return true;
      }

  }
}
