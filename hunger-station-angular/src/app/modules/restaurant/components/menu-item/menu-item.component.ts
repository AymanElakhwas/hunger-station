import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant-service';
import { Restaurant } from '../../interface/restaurant';


@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

    private restaurant: Restaurant;

    constructor(private restaurantService: RestaurantService) { }


    ngOnInit() {
        this.restaurantService.findOne('5b26cf7bb117e39f2849c98a').subscribe((restaurant: Restaurant)=>{
            this.restaurant = restaurant;
        });
    }

}
