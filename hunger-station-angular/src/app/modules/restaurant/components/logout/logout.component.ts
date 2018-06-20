import { Component, OnInit } from '@angular/core';
import { RestaurantAuthenticationService } from '../../service/restaurant-authentication-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: RestaurantAuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

}
