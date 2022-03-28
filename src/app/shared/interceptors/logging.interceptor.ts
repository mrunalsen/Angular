import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  token: string = "Fake Token";
  constructor() {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request);
  // }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem('token') ?? "Fake Token";
    return next.handle(request.clone({
      setHeaders: {
        "Authorization": `Bearer ${this.token}`
      }
    }));
  }
}
