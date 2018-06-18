import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantOrdersComponent } from './components/resturant-orders/resturant-orders.component';

const routes: Routes = [
  { path: 'resturant-orders', component: ResturantOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
