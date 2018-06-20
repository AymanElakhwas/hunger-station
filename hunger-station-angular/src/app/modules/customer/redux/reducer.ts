import { OrderState } from '../interfaces/OrderState';
// import { OrderBasket } from '../interfaces/order-basket';
import {ADD_ORDER_ITEM, CLEAR_ORDER_STATE} from './actions';

const initialState: OrderState = 
    {   data: 
        {
            customerName: null,
            customerAddress: null,
            customerTel: null,
            restaurantId: null,
            subtotal: null,
            delivery: null,
            total: null,
            items: []            
        }
    };

function addOrderItem(state, action): OrderState {
    let obj =     
        {   data: 
            {
                customerName: null,
                customerAddress: null,
                customerTel: null,
                restaurantId: action.restaurantId,
                subtotal: null,
                delivery: null,
                total: null,
                items: [...state.data.items, action.item]            
            }
        }
    let newItems = state.data.items.slice();
    let itemFound = false;
    for(let itm of newItems){
        if(itm.name == action.item.name){
            itm.qty = itm.qty + action.item.qty; 
            itm.price = itm.price + action.item.price;
            itemFound = true;
            break;
        }
    }

    if(!itemFound){
        newItems.push(action.item);
    }

    obj.data.items = newItems;

    //     obj.data.items = [...state.data.items, action.item];

    return obj;
}


function clearOrderState(state, action): OrderState {
     return Object.assign({},initialState);
}

export function reducer(state: OrderState = initialState, action) {
    switch (action.type) {
        case ADD_ORDER_ITEM: return addOrderItem(state, action);
        case CLEAR_ORDER_STATE: return clearOrderState(state, action);
        default: return state;
    }
}