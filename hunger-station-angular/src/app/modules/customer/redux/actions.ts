import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { OrderState } from '../interfaces/OrderState';
import { BasketMenuItem } from '../interfaces/basket-menu-item';

export const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM';

@Injectable()
export class CustOrderActionsService {

    constructor(private ngRedux: NgRedux<OrderState>) { }
    addOrderItemAction(restaurantId: string, item: BasketMenuItem) {
        this.ngRedux.dispatch(
            { 
                type: ADD_ORDER_ITEM, 
                restaurantId: restaurantId, 
                item: item 
            });
    }

}
