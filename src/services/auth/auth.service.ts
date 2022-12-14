import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, Observable, retry, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  REST_API_SERVER ='http://localhost:8080/api/auth/signin';

  constructor(private httpClient:HttpClient, private router: Router) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  login(user: any): Observable<any> {
    return this.httpClient .post<any>(this.REST_API_SERVER, user).pipe(retry(3),catchError(this.handleError));
  }

  GetToken(){
    return localStorage.getItem('token')||'';
   }

   logOut(){
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("id")
    sessionStorage.removeItem("email")
    this.router.navigate(['login'])
  }
}
