import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomerRoutingModule } from './customer-routing.module';
import { LoginComponent } from './components/login/login.component';
import { OrderBasketComponent } from './components/order-basket/order-basket.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './components/sample/sample.component';
import { RouterModule } from '@angular/router';

import { MatListModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ResturantMenuComponent } from './components/resturant-menu/resturant-menu.component';

@NgModule({
  imports: [
    CommonModule,
    CutomerRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    ScrollDispatchModule
  ],
  declarations: [LoginComponent, OrderBasketComponent, SampleComponent, ResturantMenuComponent],
  exports: [LoginComponent, OrderBasketComponent, SampleComponent, ResturantMenuComponent]
})
export class CutomerModule { }
