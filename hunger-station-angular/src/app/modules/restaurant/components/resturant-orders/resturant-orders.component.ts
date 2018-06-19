import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { RestaurantOrdersService } from '../../service/restaurant-orders-service'

@Component({
  selector: 'app-resturant-orders',
  templateUrl: './resturant-orders.component.html',
  styleUrls: ['./resturant-orders.component.css']
})
export class ResturantOrdersComponent implements OnInit {

  resturantId: string = '5b26cf7bb117e39f2849c979';
  restaurantOrders;

  // panelOpenState: boolean = false;

  orderActions = [
    { value: 'cancel-0', viewValue: 'Cancel' },
    { value: 'pending-1', viewValue: 'Pending' },
    { value: 'serve-2', viewValue: 'Serve' },
    { value: 'inprogress-3', viewValue: 'In Progress' },
    { value: 'delivered-4', viewValue: 'Delivered' },
  ];


  constructor(private restaurOrderServ: RestaurantOrdersService) {

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    // this.dataSource.paginator = this.paginator;
    // this.resturantId = localStorage.getItem('restaurantId');
    this.restaurOrderServ.getOrdersByRestaurantId(this.resturantId).subscribe((data) => {
      if (data['error']) {
        this.restaurantOrders = [];
      } else {
        this.restaurantOrders = data;
      }
    });

  }

  displayedColumns = ['name', 'price', 'qty'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  serveMeClicked(order) {
    console.log("Updating Order Status for :" + order);
    let newOrder = Object.assign(order);
    newOrder.order_status = "SERVED";
    this.restaurOrderServ.updateOrderStatus(order).subscribe(data => { order.order_status = "SERVED"; });
  }
}



/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];*/