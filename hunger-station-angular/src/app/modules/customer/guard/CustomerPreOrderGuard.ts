import { Injectable } from '@angular/core';
import { 
    CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CustOrderActionsService } from '../redux/actions';


@Injectable()
export class CustomerPreOrderGuard implements CanActivate {

  constructor(private router: Router, private custOrdActServ: CustOrderActionsService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.custOrdActServ.clearOrderState();
        return true;
  }
}
