import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CutomerModule } from './modules/customer/customer.module'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import{ RestaurantModule } from './modules/restaurant/restaurant.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RestaurantModule,
    CutomerModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
