import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SampleComponent } from './components/sample/sample.component';

import { ResturantMenuComponent } from './components/resturant-menu/resturant-menu.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { CustomerLoginGuard } from './guard/CustomerLoginGuard';

const routes: Routes = [
  { path: 'sample', component: SampleComponent },
  { path: 'orderdone', component: OrderConfirmationComponent, canActivate:[CustomerLoginGuard] },
  { path: 'restaurant-menu/:id', component: ResturantMenuComponent, canActivate:[CustomerLoginGuard] },
  { path: 'restaurants', component: ListRestaurantComponent, canActivate:[CustomerLoginGuard] },
  { path: 'customer-login', component: LoginComponent },
  { path: 'default', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'default' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutomerRoutingModule {
}
