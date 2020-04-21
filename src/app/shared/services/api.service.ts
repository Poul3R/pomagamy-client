import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  errorHandler(error: HttpErrorResponse) {
    console.log('errorHandler: ', error);
    return throwError(error);
  }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`).pipe(catchError(this.errorHandler));
  }

  post(url: string, body: {}) {
    return this.http.get(`${environment.api_url}${url}`, body).pipe(catchError(this.errorHandler));
  }

  put(url: string, body: {}) {
    return this.http.put(`${environment.api_url}${url}`, body).pipe(catchError(this.errorHandler));
  }

  delete(url: string) {
    return this.http.delete(`${environment.api_url}${url}`).pipe(catchError(this.errorHandler));
  }
}
