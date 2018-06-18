import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant.-service';
import { Restaurant } from '../../interface/restaurant';

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
