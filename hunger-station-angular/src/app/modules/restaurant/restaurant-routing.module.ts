import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRestaurantComponent } from './components/list-restaurant/list-restaurant.component';
import { ResturantOrdersComponent } from './components/restaurant-orders/resturant-orders.component';

const routes: Routes = [
    { path: 'restaurants', component: ListRestaurantComponent },
    { path: 'resturant-orders', component: ResturantOrdersComponent }
    // otherwise redirect to home
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RestaurantRoutingModule { }
