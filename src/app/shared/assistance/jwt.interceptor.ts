import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${JSON.parse(access_token).token}`
        }
      });
    }
    return next.handle(request);
  }
}
