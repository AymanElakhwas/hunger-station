import { OrderState } from '../interfaces/OrderState';
// import { OrderBasket } from '../interfaces/order-basket';

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
    // if(!state.data.items['length']){
    //     obj.data.items = [...state.data.items, action.item];
    // }else{
    //     obj.data.items.push(action.item);
    // }
    // Object.assign({}, state, {});
        // {
        //     data:{
        //         restaurantId: action.restaurantId,
        //         items: [...state.items, action.item] 
        //     } 
        // })
    return obj;
}

export function reducer(state: OrderState = initialState, action) {
    switch (action.type) {
        case 'ADD_ORDER_ITEM': return addOrderItem(state, action);
        default: return state;
    }
}