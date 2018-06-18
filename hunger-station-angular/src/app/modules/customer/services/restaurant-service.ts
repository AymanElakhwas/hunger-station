import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Restaurant } from "../interfaces/restaurant";

@Injectable()
export class RestaurantService {
    private restaurants: Restaurant[] = [];
    constructor(private http: HttpClient) { }

    getRestaurants() {
        return this.http.get('http://localhost:3000/restaurants');
    }

    findOne(id:string) {
        return this.http.get('http://localhost:3000/restaurants/' + id)
    }
}