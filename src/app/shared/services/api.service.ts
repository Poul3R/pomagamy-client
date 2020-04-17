import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`).pipe(catchError(
      err => {
        console.log(err);
        return throwError(err);
      }
    ));
  }

  post(url: string, body: {}) {
    return this.http.get(`${environment.api_url}${url}`, body).pipe(catchError(
      err => {
        console.log(err);
        return throwError(err);
      }
    ));
  }

  put(url: string, body: {}) {
    return this.http.put(`${environment.api_url}${url}`, body).pipe(catchError(
      err => {
        console.log(err);
        return throwError(err);
      }
    ));
  }

  patch(url: string, body: {}) {
    return this.http.patch(`${environment.api_url}${url}`, body).pipe(catchError(
      err => {
        console.log(err);
        return throwError(err);
      }
    ));
  }

  delete(url: string) {
    return this.http.delete(`${environment.api_url}${url}`).pipe(catchError(
      err => {
        console.log(err);
        return throwError(err);
      }
    ));
  }

}
