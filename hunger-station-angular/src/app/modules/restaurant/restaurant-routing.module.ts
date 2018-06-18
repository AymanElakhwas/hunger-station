import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuItemComponent } from './components/menu-item/menu-item.component';


const routes: Routes = [
    
    { path: 'menu-items', component: MenuItemComponent }
    // otherwise redirect to home
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RestaurantRoutingModule { }
