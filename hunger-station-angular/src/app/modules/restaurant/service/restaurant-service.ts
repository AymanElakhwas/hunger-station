import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Restaurant } from "../interface/restaurant";

@Injectable()
export class RestaurantService {
    private restaurants: Restaurant[] = [];
    constructor(private http: HttpClient) { }

    findOne(id:string) {
        return this.http.get('http://localhost:3000/restaurants/' + id)
    }
}