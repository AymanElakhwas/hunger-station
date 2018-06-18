import { Component } from '@angular/core';
import { OrderBasket } from '../../interfaces/order-basket';

@Component({
  selector: 'order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.css']
})
export class OrderBasketComponent {
  private orderBasket: OrderBasket = {
    subtotal: 143,
    delivery: 10,
    total: 153,
    items: [
      { name: 'Shawerma Pasta Casserole Pasta Casserole', price: 30, qty: 2 },
      { name: 'Shawerma Pasta Casserole', price: 19, qty: 1 },
      { name: 'Shawerma Pasta Casserole', price: 30, qty: 4 },
      { name: 'Shawerma Pasta Casserole', price: 23, qty: 3 },
      { name: 'Shawerma Pasta Casserole', price: 49, qty: 2 }
    ]
  }

  // private orderBasket: OrderBasket = {
  //   subtotal: 143,
  //   delivery: 10,
  //   total: 153,
  //   items: [
  //   ]
  // }

}
