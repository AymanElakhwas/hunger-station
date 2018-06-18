import { Component, OnInit } from '@angular/core';
import '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.css']
})
export class ResturantMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  foods: any[] = [
    {name: 'Sweet', rating: 'pleasant taste.', img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'},
    {name: 'Sour', rating: ' taste of acids', img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'},
    {name: 'Salty', rating: 'taste of alkali metal ions such as sodium ...' , img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'},
  ];

  foodsv2: any[] = [
    {name: 'Sweet Book', rating: 'pleasant taste.', img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'},
    {name: 'Sour Book', rating: ' taste of acids', img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'},
    {name: 'Salty Book', rating: 'taste of alkali metal ions such as sodium ...' , img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'},
    {name: 'Sweet Book', rating: 'pleasant taste.', img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'},
    {name: 'Sour Book', rating: ' taste of acids', img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'},
    {name: 'Salty Book', rating: 'taste of alkali metal ions such as sodium ...' , img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'},    
    {name: 'Sweet Book', rating: 'pleasant taste.', img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'},
    {name: 'Sour Book', rating: ' taste of acids', img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'},
    {name: 'Salty Book', rating: 'taste of alkali metal ions such as sodium ...' , img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'},
    {name: 'Sweet Book', rating: 'pleasant taste.', img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'},
    {name: 'Sour Book', rating: ' taste of acids', img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'},
    {name: 'Salty Book', rating: 'taste of alkali metal ions such as sodium ...' , img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'},
    {name: 'Sweet Book', rating: 'pleasant taste.', img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'},
    {name: 'Sour Book', rating: ' taste of acids', img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'},
    {name: 'Salty Book', rating: 'taste of alkali metal ions such as sodium ...' , img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'},
    {name: 'Sweet Book', rating: 'pleasant taste.', img: 'https://cartoonface.files.wordpress.com/2010/02/cartoon-face-avatar.jpg'},
    {name: 'Sour Book', rating: ' taste of acids', img:'http://media.merchantcircle.com/37104027/Picture%20142_full.png'},
    {name: 'Salty Book', rating: 'taste of alkali metal ions such as sodium ...' , img:'https://cdn2.iconfinder.com/data/icons/male-female-faces/154/head-female-beauty-skin-face-avatar-head-512.png'},                
  ];

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
