import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    cities: [
      "Warszawa",
      "Kraków",
      "Wrocław",
      "Gdańsk",
      "Gdynia",
      "Sopot",
      "Zakopane",
      "Malbork",
      "Katowice",
      "Szczecin",
      "Kielce",
      "Olsztyn"
    ]
  }

}
