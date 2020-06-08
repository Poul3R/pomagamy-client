import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  showNavbar = false;
  role: string;
  isAuth: boolean;

  authSubscription: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.userAuthCredentialsSubject.subscribe(userCred => {
      if (userCred && userCred.token) {
        this.isAuth = true;
        this.role = userCred.role;
      } else {
        this.isAuth = false;
        this.role = null;
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onToggleMenu() {
    this.showNavbar = !this.showNavbar;
  }
}
