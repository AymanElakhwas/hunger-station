import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable()
export class RestaurantServiceCommon {

  constructor(private http: HttpClient) { }

  getRestaurantById(restaurantId){
    return this.http.get('http://localhost:3000/restaurants/' + restaurantId);
  }


}