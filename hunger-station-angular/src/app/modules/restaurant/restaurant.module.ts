import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RouterModule } from '@angular/router';
import { ListRestaurantComponent } from './components/list-restaurant/list-restaurant.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RestaurantService } from './service/restaurant.-service';

@NgModule({
    imports: [
        CommonModule,
        RestaurantRoutingModule,
        RouterModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule
    ],
    declarations: [ListRestaurantComponent],
    exports: [ListRestaurantComponent],
    providers: [RestaurantService]
})
export class RestaurantModule { }
