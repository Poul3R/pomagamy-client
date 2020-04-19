import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavbar = false;
  role: string;
  isAuth: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.role = this.authService.getRole();
    this.isAuth = this.authService.isAuth();

    console.log(this.role, this.isAuth);
  }

  onToggleMenu() {
    this.showNavbar = !this.showNavbar;
  }
}
