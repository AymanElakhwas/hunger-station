import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomerRoutingModule } from './cutomer-routing.module';
import { LoginComponent } from './components/login/login.component';
import { OrderBasketComponent } from './components/order-basket/order-basket.component';

@NgModule({
  imports: [
    CommonModule,
    CutomerRoutingModule
  ],
  declarations: [LoginComponent, OrderBasketComponent]
})
export class CutomerModule { }
