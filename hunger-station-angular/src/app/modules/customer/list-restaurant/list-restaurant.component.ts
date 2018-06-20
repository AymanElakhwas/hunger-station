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
    page: number = 1;
    longitude: number = 0;
    latitude: number = 0;
    lastPage: boolean = false;

    constructor(private restaurantService: RestaurantService) { }

    ngOnInit() {
        this.findMe();
        if (this.longitude != 0 && this.latitude != 0) {
            console.log(this.longitude + " " + this.latitude);
            this.getByLocation()
        } else {
            this.restaurantService.getRestaurants()
                .subscribe((restaurants: Restaurant[]) => {
                    this.restaurants = restaurants;
                },
                    (err: any) => {
                        console.log('Error occurred while fetching data. Please check your connection.')
                    });
        }
    }

    findMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                this.getByLocation();
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
            this.restaurantService.getRestaurants()
                .subscribe((restaurants: Restaurant[]) => {
                    this.restaurants = restaurants;
                },
                    (err: any) => {
                        console.log('Error occurred while fetching data. Please check your connection.')
                    });
        }
    }


    getByLocation() {
        this.restaurantService.getRestaurantsByCurrentLocation(this.longitude, this.latitude, this.page)
            .subscribe((restaurants: Restaurant[]) => {
                this.restaurants = restaurants;
                console.log(restaurants.length)
                if (restaurants.length < 9) {
                    this.page--;
                    this.lastPage = true;
                }
            },
                (err: any) => {
                    console.log('Error occurred while fetching data. Please check your connection.')
                });
    }

    previous() {
        if (this.page > 1) {
            this.page--;
            this.getByLocation();
        }
        this.lastPage = false;
    }

    nextPage() {
        this.page++;
        this.getByLocation();
    }
}
