import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RouterModule } from '@angular/router';


import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RestaurantService } from './service/restaurant-service';


import { MatFormFieldModule } from '@angular/material/form-field';


import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ResturantOrdersComponent } from './components/resturant-orders/resturant-orders.component';

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
        MatPaginatorModule,
        MatListModule
    ],
    declarations: [MenuItemComponent, ResturantOrdersComponent],
    exports: [MenuItemComponent, ResturantOrdersComponent],
    providers: [RestaurantService]
})
export class RestaurantModule { }
