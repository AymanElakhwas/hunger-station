import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable()
export class RestaurantOrdersService {

  constructor(private http: HttpClient) { }

  getOrdersByRestaurantId(restaurantId){
    return this.http.get('http://localhost:3000/api/orders/restaurants/' + restaurantId);
  }


}