import { Component } from '@angular/core';
import { OrderBasket } from '../../interfaces/order-basket';
import { OrderBasketService } from '../../services/order-basket-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.css'],
  providers: [OrderBasketService]
})
export class OrderBasketComponent {
  nextPageUrl: string = "/orderconfirmation";
  private orderBasket: OrderBasket = {
    customerName: 'Fred',
    customerAddress: {
      street: '2000 court st',
      city: 'Fairfield',
      state: 'IA',
      zip: '52556',
      country: 'US'
    },
    customerTel: '5106404588',
    restaurantId: 'restaurant_id0',
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

  constructor(private basketService: OrderBasketService, private route: ActivatedRoute,
    private router: Router) { }

  onPlaceOrderClick() {
    this.basketService.placeOrder(this.orderBasket).subscribe(data => {
      this.router.navigate([this.nextPageUrl]);
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
  // private orderBasket: OrderBasket = {
  //   subtotal: 143,
  //   delivery: 10,
  //   total: 153,
  //   items: [
  //   ]
  // }

}
