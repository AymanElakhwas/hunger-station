import { Component, OnInit } from '@angular/core';
import { OrderBasket } from '../../interfaces/order-basket';
import { OrderBasketService } from '../../services/order-basket-service';
import { Router, ActivatedRoute } from '@angular/router';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { OrderState } from '../../interfaces/OrderState';

@Component({
  selector: 'order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.css'],
  providers: [OrderBasketService]
})

export class OrderBasketComponent implements OnInit {
  nextPageUrl: string = "/checkout";
  private orderBasket: OrderBasket;


  @select('data') orderItemsObservable: Observable<OrderBasket>;

  constructor(private basketService: OrderBasketService, private route: ActivatedRoute,
    private router: Router) { }

  onPlaceOrderClick() {
    this.basketService.placeOrder(this.orderBasket).subscribe(data => {
      this.router.navigate([this.nextPageUrl]);
    });
  }


  ngOnInit() {
    this.orderItemsObservable.subscribe((orderBasket: OrderBasket) => {
      this.orderBasket = orderBasket;
      this.calculateSummaryPrices(this.orderBasket);
      this.addCustomerDataToOrderBasket(this.orderBasket);
    });

  }


  calculateSummaryPrices(orderBasket: OrderBasket) {
    let subtotal = 0;
    for (let item of orderBasket.items) {
      subtotal += item.price;
    }
    orderBasket.subtotal = subtotal;
    orderBasket.delivery = 10;
    orderBasket.total = orderBasket.subtotal + orderBasket.delivery;
  }

  addCustomerDataToOrderBasket(orderBasket: OrderBasket) {
    const customerStr = localStorage.getItem('currentCustomer');
    const customer = JSON.parse(customerStr);
    orderBasket.customerAddress = customer.address;
    orderBasket.customerName = customer.name;
    orderBasket.customerTel = customer.tel;
  }
}
