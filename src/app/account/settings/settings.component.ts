import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../shared/services/utils.service';
import {UserService} from '../../shared/services/user.service';
import {UserInterface} from '../../shared/interfaces/user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  voivodeships: {
    value: string,
    viewValue: string
  }[] = [];

  user: UserInterface;

  nameForm: FormGroup;
  emailForm: FormGroup;
  phoneForm: FormGroup;
  passwordForm: FormGroup;
  cityForm: FormGroup;
  voivodeshipForm: FormGroup;

  constructor(private utilsService: UtilsService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.voivodeships = this.utilsService.getVoivodeshipList();
    this.user = this.userService.getUserData();


    this.initForms();

  }

  initForms() {
    this.nameForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required])
    });

    this.emailForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required, Validators.email])
    });

    this.phoneForm = new FormGroup({
      phone: new FormControl(this.user.phone, [Validators.required])
    });

    this.passwordForm = new FormGroup({
      password: new FormControl(this.user.password, [Validators.required])
    });

    this.cityForm = new FormGroup({
      city: new FormControl(this.user.city, [Validators.required])
    });

    this.voivodeshipForm = new FormGroup({
      voivodeship: new FormControl(this.user.voivodeship, [Validators.required])
    });
  }

  onNameFormSubmit() {
    if (this.nameForm.valid) {
      console.log(this.nameForm.controls.name.value);
    }
  }

  onEmailFormSubmit() {
    if (this.emailForm.valid) {
      console.log(this.emailForm.controls.email.value);
    }
  }

  onPhoneFormSubmit() {

  }

  onPasswordFormSubmit() {

  }

  onCityFormSubmit() {

  }

  onVoivodeshipFormSubmit() {
    if (this.voivodeshipForm.valid) {
      console.log(this.voivodeshipForm.controls['voivodeship'].value);
    }
  }

  dataNotChanged(data: string) {
    console.log('dataChanged called');

    let flag: boolean;

    switch (data) {
      case 'name':
        this.nameForm.controls.name.value !== this.user.name ? flag = false : flag = true;
        break;
      case 'email':
        this.emailForm.controls.email.value !== this.user.email ? flag = false : flag = true;
        break;
      case 'phone':
        this.phoneForm.controls.phone.value !== this.user.phone ? flag = false : flag = true;
        break;
      default:
        flag = true;
    }

    return flag;
  }
}
