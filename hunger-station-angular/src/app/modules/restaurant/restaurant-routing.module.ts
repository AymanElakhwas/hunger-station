import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResturantOrdersComponent } from './components/restaurant-orders/resturant-orders.component';

const routes: Routes = [
    
    { path: 'resturant-orders', component: ResturantOrdersComponent }
    // otherwise redirect to home
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RestaurantRoutingModule { }
