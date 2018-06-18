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
      this.router.navigate([this.nextPageUrl]);
    },
      error => {
        this.error = error;
        this.loading = false;
      });
  }

}
