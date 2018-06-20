import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../../services/customer-authentication-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: CustomerAuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
