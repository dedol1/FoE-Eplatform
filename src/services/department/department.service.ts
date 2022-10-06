import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, retry, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private REST_API_SERVER = "http://localhost:8080/api/v1/department";

  constructor(private httpClient : HttpClient) { }

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

  getAllDepartments(){

    let allAssetsUrl = this.REST_API_SERVER
    return this.httpClient.get<any>(allAssetsUrl).pipe(retry(3),catchError(this.handleError));
  }

  createDepartment(user: any): Observable<any> {
    return this.httpClient .post<any>(this.REST_API_SERVER, user).pipe(retry(3),catchError(this.handleError));
  }
  
  deleteDepartment(id:number){
    return this.httpClient.delete(this.REST_API_SERVER + "/" + id).pipe(catchError(this.handleError));
  }
}
