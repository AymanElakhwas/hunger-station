import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class RestaurantAuthenticationService {
    constructor(private http: HttpClient, private jwtHelper: JwtHelper) { }

    login(credentials: Credentials) {
        localStorage.clear();
        return this.http.post<any>('http://localhost:3000/restaurants/auth', credentials)
            .pipe(map((res: any) => {
                //console.log(res);
                if (res.token) {
                    // login successful if there's a jwt token in the response
                    // store jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('restaurantToken', res.token);
                    localStorage.setItem('currentRestaurnt', JSON.stringify(res.restaurant));
                }
                return res;
            }));
    }

    logout() {
        // remove token from local storage to log user out
        localStorage.removeItem('restaurantToken');
        localStorage.removeItem('currentRestaurntId');
    }

    loggedIn() {
        const token = localStorage.getItem('restaurantToken');
        const restaurant = localStorage.getItem('currentRestaurntId');
        if (!token || !restaurant)
            return false;
        return this.jwtHelper.isTokenExpired(token);
    }
}