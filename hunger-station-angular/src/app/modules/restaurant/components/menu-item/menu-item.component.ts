import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../service/restaurant-service';
import { Restaurant } from '../../interface/restaurant';


@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

    private restaurant: Restaurant;
    private menu_items: any[];

    constructor(private restaurantService: RestaurantService) { }

    ngOnInit() {
        this.restaurantService.findOne('5b26cf7bb117e39f2849c97a').subscribe((restaurant: Restaurant) => {
            this.restaurant = restaurant;
            this.menu_items = this.restaurant.menu_item;
        },
        (err: any) => { console.log('Error occurred while fetching data. Please check your connection.')});
    }

    onSubmit(f) {
        var found = this.menu_items.find(function (obj) { return obj.name == f.value.name; });

        if (found) {
            f.controls['name'].setErrors({ 'notValidName': true });
        }

        if (f.valid) {
            let newId = 0;
            for (const menu_item of this.menu_items) {
                if (menu_item.id > newId) newId = menu_item.id;
            }
            const newMenuItem = {
                "id": Number(newId + 1),
                "name": f.value.name,
                "desc": f.value.desc,
                "price": Number(f.value.price),
                "img": "https://www.yourmomhatesthis.com/images/2016/12/Pizza-Transparent.png"
            }


            this.restaurantService.addMenuItem(newMenuItem, this.restaurant._id.toString()).subscribe(
                (data) => {
                    this.restaurant.menu_item.push(newMenuItem);
                },
                (err: any) => { console.log('Error occurred while fetching data. Please check your connection.')});

        }



    }

}
