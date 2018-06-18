import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant-service';
import { Restaurant } from '../interfaces/restaurant';

@Component({
    selector: 'app-list-restaurant',
    templateUrl: './list-restaurant.component.html',
    styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
    restaurants: Restaurant[] = [];
    constructor(private restaurantService: RestaurantService) { }

    ngOnInit() {
       
        this.restaurantService.getRestaurants()
        .subscribe((restaurants: Restaurant[])=>{
            this.restaurants = restaurants;

        });

    }

}
