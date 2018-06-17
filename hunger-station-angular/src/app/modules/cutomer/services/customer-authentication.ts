import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class CustomerAuthenticationService {
    constructor(private http: HttpClient) { }

    login(credentials: Credentials) {
        return this.http.post<any>('http://localhost:8080/api/customer/auth', credentials)
            .pipe(map((res: any) => {
                return res.json();
            })).subscribe(res => {
                // login successful if there's a jwt token in the response
                // store jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('id_token', res.token);
            }
                , error => console.log(error));
    }

    logout() {
        // remove token from local storage to log user out
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}