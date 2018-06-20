import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'restaurant-home',
    templateUrl: './home-component.html',
    styleUrls: ['./home-component.css']
})
export class HomeComponent implements OnInit { 
    currentRestaurant: any;   
    constructor(){
       
    }

    ngOnInit() {
        if(JSON.parse(localStorage.getItem('currentRestaurnt'))){
            this.currentRestaurant = JSON.parse(localStorage.getItem('currentRestaurnt'))
        }
        console.log(this.currentRestaurant);
    }
}
