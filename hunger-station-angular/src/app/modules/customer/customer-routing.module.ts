import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SampleComponent } from './components/sample/sample.component';

import { ResturantMenuComponent } from './components/resturant-menu/resturant-menu.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { CustomerLoginGuard } from './guard/CustomerLoginGuard';
import { CustomerAlreadyLoggedGuard } from './guard/CustomerAlreadyLoggedGuard';
import {DefaultHMComponent} from './components/default-hm/default-hm.component'

import { CheckoutComponent } from './components/checkout/checkout.component';

import {CustomerPreOrderGuard} from './guard/CustomerPreOrderGuard';

const routes: Routes = [
  // { path: 'sample', component: SampleComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate:[CustomerLoginGuard] },
  { path: 'orderdone', component: OrderConfirmationComponent, canActivate:[CustomerLoginGuard] },
  { path: 'restaurant-menu/:id', component: ResturantMenuComponent, canActivate:[CustomerLoginGuard, CustomerPreOrderGuard] },
  { path: 'restaurants', component: ListRestaurantComponent, canActivate:[CustomerLoginGuard] },
  { path: 'customer-login', component: LoginComponent, canActivate:[CustomerAlreadyLoggedGuard] },
  //{ path: 'customer-home', component: ListRestaurantComponent, canActivate:[CustomerLoginGuard] },
  { path: '', component: DefaultHMComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutomerRoutingModule {
}
