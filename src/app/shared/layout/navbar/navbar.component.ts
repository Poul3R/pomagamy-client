import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavbar = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleMenu(show?: boolean) {
    if (show) {
      this.showNavbar = show;
    } else {
      this.showNavbar = !this.showNavbar;
    }
  }
}
