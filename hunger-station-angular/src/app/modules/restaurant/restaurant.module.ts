import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RouterModule } from '@angular/router';


import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RestaurantService } from './service/restaurant-service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';


import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ResturantOrdersComponent } from './components/resturant-orders/resturant-orders.component';
import { RestaurantLoginComponent } from './components/login/login.component'

import { RestaurantOrdersService } from './service/restaurant-orders-service'
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { HomeComponent } from './components/home/home-component'

import { RestaurantAuthenticationService } from './service/restaurant-authentication-service';

import { RestaurantAlreadyLoggedGuard } from './guard/RestaurantAlreadyLoggedGuard';
import { RestaurantLoginGuard } from './guard/RestaurantLoginGuard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { LogoutComponent } from './components/logout/logout.component';



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
        MatListModule,
        FormsModule,
        MatInputModule,
        MatTabsModule
    ],
    declarations: [MenuItemComponent, ResturantOrdersComponent, RestaurantLoginComponent, HomeComponent, LogoutComponent],
    exports: [MenuItemComponent, ResturantOrdersComponent, RestaurantLoginComponent, HomeComponent, LogoutComponent],
    providers: [
        RestaurantAuthenticationService,
        RestaurantService,
        RestaurantOrdersService,
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
        RestaurantAlreadyLoggedGuard,
        RestaurantLoginGuard,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ]
})
export class RestaurantModule { }
