import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RouterModule } from '@angular/router';
//import { ListRestaurantComponent } from './components/list-restaurant/list-restaurant.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RestaurantService } from './service/restaurant-service';
import { ResturantOrdersComponent } from './components/restaurant-orders/resturant-orders.component';

import { MatFormFieldModule } from '@angular/material/form-field';


import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [
        CommonModule,
        RestaurantRoutingModule,
        RouterModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
       
        MatExpansionModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [ResturantOrdersComponent],
    exports: [ResturantOrdersComponent],
    providers: [RestaurantService]
})
export class RestaurantModule { }
