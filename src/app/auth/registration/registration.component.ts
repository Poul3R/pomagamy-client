import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {CustomValidators} from '../../shared/custom-validators';

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

  registrationForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    // todo:: Odkomentować gdy już będzie można
    // if (this.authService.isAuth()) {
    //   this.router.navigate(['konto']);
    //   return;
    // }

    this.registrationForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.minLength(6)),
      phone: new FormControl(null),
      city: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      voivodeship: new FormControl(null, [Validators.required]),
      district: new FormControl(null, Validators.minLength(2)),
      description: new FormControl(null, [Validators.required]),
      terms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  onRegistrationSubmit() {
    if (this.registrationForm.valid) {
      // todo:: wywołać metodę do api
    }
    const test = this.registrationForm.controls.terms.errors;
    console.log(test);
  }
}
