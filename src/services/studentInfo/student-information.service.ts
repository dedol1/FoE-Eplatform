import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentInformationService {

  private REST_API_SERVER = " http://localhost:8080/api/v1/student/info";

  constructor(private httpClient : HttpClient) { }

  getStudentInfo(email:String){

    let programUrl = this.REST_API_SERVER
    return this.httpClient.get<any>(programUrl+'/'+email).pipe(retry(3),catchError(this.handleError));
  }

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
}
