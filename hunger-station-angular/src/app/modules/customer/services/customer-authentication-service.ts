import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class CustomerAuthenticationService {
    constructor(private http: HttpClient, private jwtHelper: JwtHelper) { }

    login(credentials: Credentials) {
        return this.http.post<any>('http://localhost:3000/api/customers/auth', credentials)
            .pipe(map((res: any) => {
                console.log(res);
                if (res.token) {
                    // login successful if there's a jwt token in the response
                    // store jwt token in local storage to keep user logged in between page refreshes
                    console.log(res.token);
                    localStorage.setItem('id_token', res.token);
                    const customer = this.jwtHelper.decodeToken(res.token);
                    localStorage.setItem('currentCustomer', JSON.stringify(customer));
                }
                return res;
            }));
    }

    logout() {
        // remove token from local storage to log user out
        localStorage.removeItem('id_token');
        localStorage.removeItem('currentCustomer');
    }

    loggedIn() {
        const token = localStorage.getItem('id_token');
        const customer = localStorage.getItem('currentCustomer');
        if (!token || !customer)
            return false;
        return !this.jwtHelper.isTokenExpired(token);
    }
}