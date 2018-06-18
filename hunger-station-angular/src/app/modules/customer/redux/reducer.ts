import { OrderState } from '../interfaces/OrderState';

const initialState: OrderState = {
    data: [
        /*{   name: 'Shawrma', 
            qty: 1, 
            price: 16
        },
        {   name: 'Kebab', 
            qty: 1, 
            price: 22
        },
        {   name: 'Broasted', 
            qty: 1, 
            price: 18
        }*/
    ]
}

function addOrderItem(state, action): OrderState {
    return Object.assign({}, state,
        { data: [...state.data, action.data] })
}

export function reducer(state: OrderState = initialState, action) {
    switch (action.type) {
        case 'ADD_ORDER_ITEM': return addOrderItem(state, action);
        default: return state;
    }
}