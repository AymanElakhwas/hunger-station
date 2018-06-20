import { Component } from '@angular/core';
import { RestaurantAuthenticationService } from '../../service/restaurant-authentication-service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Component({
    selector: 'app-restaurant-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [RestaurantAuthenticationService, JwtHelper]
})
export class RestaurantLoginComponent {
    loading = false;
    nextPageUrl: string = "/restaurant-home";
    error: any;
    constructor(private auth: RestaurantAuthenticationService, private route: ActivatedRoute,
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
