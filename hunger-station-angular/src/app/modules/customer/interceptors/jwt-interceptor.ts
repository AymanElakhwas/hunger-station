import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
        let token = localStorage.getItem('id_token');
        // add authorization header with jwt token if available

        if (currentCustomer && token) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
            });
        }
        return next.handle(request);
    }
}