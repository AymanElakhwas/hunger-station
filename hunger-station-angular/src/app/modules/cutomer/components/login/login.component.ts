import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../../services/customer-authentication';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CustomerAuthenticationService]
})
export class LoginComponent {
  credentials: Credentials;
  constructor(private auth: CustomerAuthenticationService) { }

  onLogin(credentials) {
    this.auth.login(this.credentials);
  }

}
