import { Component } from '@angular/core';
import { CustomerAuthenticationService } from '../../services/customer-authentication';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CustomerAuthenticationService]
})
export class LoginComponent {
  loading = false;
  nextPageUrl: string = "/sample";
  error: any;
  constructor(private auth: CustomerAuthenticationService, private route: ActivatedRoute,
    private router: Router) { }

  onLogin(credentials) {
    this.loading = true;
    this.auth.login(credentials).subscribe(data => {
      if (data.token)
        this.router.navigate([this.nextPageUrl]);
      if (data.error) {
        this.error = "Wrong username or password";
      }
    },
      error => {
        this.error = error;
        this.loading = false;
      });
  }

}
