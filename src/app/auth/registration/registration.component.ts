import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
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
