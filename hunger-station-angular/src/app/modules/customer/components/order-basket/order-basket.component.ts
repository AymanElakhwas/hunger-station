import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.css']
})
export class OrderBasketComponent implements OnInit {
  private basketImg = require('./images/basket.png');

  private items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
