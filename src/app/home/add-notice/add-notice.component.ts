import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})


export class AddNoticeComponent implements OnInit {
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
