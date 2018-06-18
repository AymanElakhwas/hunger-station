import { BasketMenuItem } from "./basket-menu-item";

export interface OrderBasket {
    subtotal: number;
    delivery: number;
    total: number;
    items: BasketMenuItem[];
}