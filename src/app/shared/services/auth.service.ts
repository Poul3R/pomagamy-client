import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = true;
  private role = 'volunteer'; // volunteer | needy

  constructor(private apiService: ApiService) {
  }

  isAuth(): boolean {
    return this.isAuthenticated;
  }

  getRole(): string {
    return this.role;
  }

  login(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };

    return this.apiService.post('users/login', data);
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

    return this.apiService.post('users', data);
  }
}
