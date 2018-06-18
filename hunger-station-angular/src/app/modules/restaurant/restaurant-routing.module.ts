import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRestaurantComponent } from './components/list-restaurant/list-restaurant.component';

const routes: Routes = [
    { path: 'restaurants', component: ListRestaurantComponent },
    // otherwise redirect to home
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RestaurantRoutingModule { }
