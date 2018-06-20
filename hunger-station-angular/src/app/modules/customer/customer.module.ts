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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store } from './redux/store';

import { OrderState } from './interfaces/OrderState';
// import { OrderBasket } from './interfaces/order-basket';

import { CustOrderActionsService } from './redux/actions';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { RestaurantService } from './services/restaurant-service';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

import { CustomerAlreadyLoggedGuard } from './guard/CustomerAlreadyLoggedGuard';
import { CustomerLoginGuard } from './guard/CustomerLoginGuard';
import { CustomerAuthenticationService } from './services/customer-authentication-service';
import { JwtHelper } from 'angular2-jwt';
import { DefaultHMComponent } from './components/default-hm/default-hm.component';

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
        ScrollDispatchModule,
        NgReduxModule,
        MatExpansionModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [
        LoginComponent, 
        OrderBasketComponent, 
        OrderConfirmationComponent, 
        SampleComponent, ResturantMenuComponent, 
        ListRestaurantComponent, 
        DefaultHMComponent],
    providers: 
        [
            CustomerAuthenticationService, 
            JwtHelper, 
            CustOrderActionsService, 
            RestaurantService, 
            CustomerLoginGuard,
            CustomerAlreadyLoggedGuard
        ],
    exports: [
        LoginComponent, 
        OrderBasketComponent, 
        SampleComponent, 
        OrderConfirmationComponent, 
        ResturantMenuComponent, 
        ListRestaurantComponent,
        DefaultHMComponent]
})
export class CutomerModule {
    constructor(ngRedux: NgRedux<OrderState>) {
        ngRedux.provideStore(store)
    }
}
