import { BasketMenuItem } from "./basket-menu-item";
import { Address } from "./address";

export interface OrderBasket {
    customerName: string;
    customerAddress: Address;
    customerTel: string;
    restaurantId: string;
    subtotal: number;
    delivery: number;
    total: number;
    items: BasketMenuItem[];
}