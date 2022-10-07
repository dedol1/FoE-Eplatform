import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  constructor(private authService : AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let token = sessionStorage.getItem('token');
   console.log('token ' + token);

   let jwttoken = req.clone({
    setHeaders:{
      Authorization: 'Bearer  ' + token
    }
    
   })
   return next.handle(jwttoken);
  }
 
}
