import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  voivodeships: {
    value: string,
    viewValue: string
  }[] = [
    {value: 'pomorskie', viewValue: 'pomorskie'},
    {value: 'zachodniopomorskie', viewValue: 'zachodniopomorskie'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
