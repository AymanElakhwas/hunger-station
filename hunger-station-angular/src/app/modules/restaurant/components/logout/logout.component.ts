import { Component, OnInit } from '@angular/core';
import { RestaurantAuthenticationService } from '../../service/restaurant-authentication-service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: RestaurantAuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
