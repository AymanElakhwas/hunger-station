import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomerRoutingModule } from './cutomer-routing.module';
import { LoginComponent } from './components/login/login.component';
import { OrderBasketComponent } from './components/order-basket/order-basket.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    CutomerRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [LoginComponent, OrderBasketComponent],
  exports: [LoginComponent, OrderBasketComponent]
})
export class CutomerModule { }
