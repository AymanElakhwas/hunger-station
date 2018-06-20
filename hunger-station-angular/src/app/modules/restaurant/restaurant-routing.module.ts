import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

import { ResturantOrdersComponent } from './components/resturant-orders/resturant-orders.component';
import { RestaurantLoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home-component';

import {RestaurantAlreadyLoggedGuard} from './guard/RestaurantAlreadyLoggedGuard';
import {RestaurantLoginGuard} from './guard/RestaurantLoginGuard';

const routes: Routes = [
    
    
    { path: 'restaurant-login', component: RestaurantLoginComponent, canActivate:[RestaurantAlreadyLoggedGuard] },
    { path: 'restaurant-home', component: HomeComponent, canActivate:[RestaurantLoginGuard] },
    // { path: 'menu-items', component: MenuItemComponent },
    // { path: 'restaurant-orders', component: ResturantOrdersComponent }
    // otherwise redirect to home
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RestaurantRoutingModule { }
