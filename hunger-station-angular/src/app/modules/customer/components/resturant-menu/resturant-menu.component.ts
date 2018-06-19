import { Component, OnInit, ViewChild } from '@angular/core';
import '@angular/platform-browser-dynamic';

import{ ActivatedRoute} from '@angular/router'; 

import { OrderState } from '../../interfaces/OrderState';
import { OrderBasket } from '../../interfaces/order-basket';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

import { CustOrderActionsService } from '../../redux/actions';

import { RestaurantService } from '../../services/restaurant-service';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.css']
})
export class ResturantMenuComponent implements OnInit {

  resturantId:string = '';
  restaurantName: string = 'restaurant name';
  restaurantImg: string = '';
  menuItems: any[] = [];

  // @select('data') orderItemsObservable: Observable<OrderState>;
  constructor(
      private restaurServ:RestaurantService, 
      private custOrdServ: CustOrderActionsService,
      private route:ActivatedRoute) {

        route.params.subscribe(params=>{
          this.resturantId = params['id'];

          this.restaurServ.findOne(this.resturantId).subscribe( (data) => {
            if(data['error']){
                this.menuItems = [];
            }else{
                this.menuItems = data['menu_item'];
                this.restaurantImg = data['image_url'];
                this.restaurantName = data['name'];
            }
          });

        });

      }

  ngOnInit() {
    // this.orderItemsObservable.subscribe((data)=>
    //   {
    //     console.log('Subscriper Received the new Ordered item list !!');
    //     console.log(data);
    //   });
  }

//   tiles = [
//     {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
//     {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
//     {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
//     {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
//   ];

  handleBtnAdd(value){

    this.custOrdServ.addOrderItemAction(
        this.resturantId, 
        {   name: this.menuItems[value].name, 
            qty: 1, 
            price: this.menuItems[value].price
        });

  }

}
