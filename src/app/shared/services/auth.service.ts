import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = true;
  private role = 'volunteer'; // volunteer | needy

  isAuth(): boolean {
    return this.isAuthenticated;
  }

  getRole(): string {
    return this.role;
  }
}
