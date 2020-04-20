import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

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

  addNoticeForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.addNoticeForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
      password: new FormControl(null, Validators.minLength(6)),
      city: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      voivodeship: new FormControl(null, Validators.required),
      district: new FormControl(null, Validators.minLength(2)),
      description: new FormControl(null, [Validators.required, Validators.maxLength(700)]),
      terms: new FormControl(false, Validators.requiredTrue)
    });
  }

  onAddNoticeFormSubmit() {
    if(this.addNoticeForm.valid) {
      console.log('ogłoszenie dodane');
    }
  }
}
