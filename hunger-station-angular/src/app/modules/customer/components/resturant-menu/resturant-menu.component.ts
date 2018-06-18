import { Component, OnInit, ViewChild } from '@angular/core';
import '@angular/platform-browser-dynamic';

import { OrderState } from '../../interfaces/OrderState';
import { OrderBasket } from '../../interfaces/order-basket';

import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.css']
})
export class ResturantMenuComponent implements OnInit {

  @select('data') orderItemsObservable: Observable<OrderState>;
  constructor(private ngRedux: NgRedux<OrderState>) {}

  ngOnInit() {
    this.orderItemsObservable.subscribe((data)=>
      {
        console.log('Subscriper Received the new Ordered item list !!');
        console.log(data);

        // this.orderItems = store.getState().data;
        // for(let i=0; i<data['length']; i++){
        //   console.log(data[i]);
        // }  

      });
  }

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


  menuItems: any[] = [
    {   name: 'Shawrma', 
        desc: 'Arabic Grilled Shawrma',
        price: 16, 
        img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'
    },
    {   name: 'Kebab', 
        desc: 'Arabic Grilled Kebab',
        price: 22, 
        img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'
    },
    {   name: 'Broasted', 
        desc: 'Fried Chicken',
        price: 18, 
        img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'
    }
  ];


  handleBtnAdd(value){

    let actionData = 
      {
        type: 'ADD_ORDER_ITEM', 
        restaurantId: '11223344',
        item: 
            {   name: this.menuItems[value].name, 
                qty: 1, 
                price: this.menuItems[value].price
            }
      };

    this.ngRedux.dispatch(actionData);
  }

}
