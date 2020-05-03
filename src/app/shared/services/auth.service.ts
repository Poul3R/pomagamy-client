import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {UtilsService} from './utils.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {UserCredentialsModel} from '../models/user-credentials.model';
import {UserCredentialsInterface} from '../interfaces/user-credentials.interface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // ROLE:: volunteer | needy
  userAuthCredentialsSubject = new BehaviorSubject<UserCredentialsModel>(null);

  constructor(private httpClient: HttpClient, private utilsService: UtilsService, private router: Router) {
  }

  loginHandler(id: string, email: string, token: string, refToken: string, role: string) {
    const sec = 3600;
    const expDate = new Date(new Date().getTime() + sec * 1000);
    const userCredentials = new UserCredentialsModel(id, email, token, refToken, expDate, role);

    this.userAuthCredentialsSubject.next(userCredentials);
    localStorage.setItem('userCred', JSON.stringify(userCredentials));
  }

  login(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };

    return this.httpClient.post<UserCredentialsInterface>('users/login', data).pipe(catchError(this.utilsService.errorHandler), tap(
      userCred => {
        this.loginHandler(userCred._id, userCred.email, userCred.auth.token, userCred.auth.refresh_token, userCred.role);
      }
    ));
  }

  registration(name: string, email: string, phone: string, password: string, city: string, voivodeship: string, district: string) {
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      city: city,
      voivodeship: voivodeship,
      district: district
    };

    return this.httpClient.post<UserCredentialsInterface>('users', data).pipe(catchError(this.utilsService.errorHandler), tap(userCred => {
      this.loginHandler(userCred._id, userCred.email, userCred.auth.token, userCred.auth.refresh_token, userCred.role);
    }));
  }

  autoLogin() {
    if (!localStorage.getItem('userCred')) {
      this.userAuthCredentialsSubject.next(null);
      return;
    }

    const userCredentialsLS: {
      id: string,
      email: string,
      _token: string,
      _refreshToken: string,
      expireDate: Date,
      role: string
    } = JSON.parse(localStorage.getItem('userCred'));


    const userCredentials = new UserCredentialsModel(
      userCredentialsLS.id,
      userCredentialsLS.email,
      userCredentialsLS._token,
      userCredentialsLS._refreshToken,
      userCredentialsLS.expireDate,
      userCredentialsLS.role);

    if (userCredentials.token) {
      this.userAuthCredentialsSubject.next(userCredentials);
    }
  }

  refreshToken() {

  }

  logout() {
    this.userAuthCredentialsSubject.next(null);
    localStorage.removeItem('userCred');
    this.router.navigate(['/']);
  }
}
