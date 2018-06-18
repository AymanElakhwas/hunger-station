import { Component, OnInit } from '@angular/core';
import { BasketMenuItem } from '../../interfaces/basket-menu-item';

@Component({
  selector: 'order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.css']
})
export class OrderBasketComponent {
  private basketImg = require('./images/basket.png');
  private subtotal: number = 143;
  private delivery: number = 10;
  private total: number = 153;
  private items: BasketMenuItem[] = [
    { name: 'Shawerma Pasta Casserole Pasta Casserole', price: 30, qty: 2 },
    { name: 'Shawerma Pasta Casserole', price: 19, qty: 1 },
    { name: 'Shawerma Pasta Casserole', price: 30, qty: 4 },
    { name: 'Shawerma Pasta Casserole', price: 23, qty: 3 },
    { name: 'Shawerma Pasta Casserole', price: 49, qty: 2 }
  ];
  // private items: BasketMenuItem[] = [];

}
