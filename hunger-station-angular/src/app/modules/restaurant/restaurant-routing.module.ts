import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

import { ResturantOrdersComponent } from './components/resturant-orders/resturant-orders.component';
import { RestaurantLoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home-component';

const routes: Routes = [
    
    
    { path: 'restaurant-login', component: RestaurantLoginComponent },
    { path: 'restaurant-home', component: HomeComponent },
    { path: 'menu-items', component: MenuItemComponent },
    { path: 'restaurant-orders', component: ResturantOrdersComponent }
    // otherwise redirect to home
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RestaurantRoutingModule { }
