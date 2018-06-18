import { OrderBasket } from "../interfaces/order-basket";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OrderBasketService {

    constructor(private http: HttpClient) { }

    placeOrder(orderBasket: OrderBasket) {
        return this.http.post('http://localhost:3000/api/orders', orderBasket);
    }
}