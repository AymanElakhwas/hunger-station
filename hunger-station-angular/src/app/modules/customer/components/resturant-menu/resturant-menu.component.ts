import { Component, OnInit, ViewChild } from '@angular/core';
import '@angular/platform-browser-dynamic';

import { store } from '../../redux/store';
import { reducer } from '../../redux/reducer';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.css']
})
export class ResturantMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.orderItems = store.getState().data;
    this.unsubscribe = store.subscribe(()=>
      {
        console.log('Subscriper Received the new Ordered item list !!');
        this.orderItems = store.getState().data;
        for(let itms of this.orderItems){
          console.log(itms);
        }  
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
      {type: 'ADD_ORDER_ITEM', 
       data: 
            {   name: this.menuItems[value].name, 
                qty: 1, 
                price: this.menuItems[value].price
            }
      };

    store.dispatch(actionData);
  }

  orderItems; unsubscribe;

  ngOnDestroy(){ this.unsubscribe(); }



}
