import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {UserInterface} from '../../shared/interfaces/user.interface';
import {UserService} from '../../shared/services/user.service';

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

  disableAccountFields = false;
  addNoticeForm: FormGroup;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    // todo:: Przechodziąc ze strony głównej do "dodaj-ogłoszenie" (jako volonratiusz) wysypuję błąd formularza.!! Naprawić
    // if (this.authService.isAuth()) {
    //   if (this.authService.getRole() === 'needy') {
    //     const user = this.userService.getUserData();
    //
    //     this.initForm(user);
    //
    //     this.disableAccountFields = true;
    //   } else {
    //     this.router.navigate(['konto']);
    //     return;
    //   }
    // } else {
    //   this.initForm();
    // }
    this.initForm();

  }

  initForm(user?: UserInterface) {
    if (user) {
      this.addNoticeForm = new FormGroup({
        name: new FormControl({value: user.name, disabled: true}, [Validators.required, Validators.minLength(3)]),
        email: new FormControl({value: user.email, disabled: true}, [Validators.required, Validators.email]),
        phone: new FormControl({value: user.phone, disabled: true}),
        password: new FormControl({value: user.password, disabled: true}, Validators.minLength(6)),
        city: new FormControl(user.city, [Validators.required, Validators.minLength(2)]),
        voivodeship: new FormControl(null, Validators.required),
        district: new FormControl(user.district, Validators.minLength(2)),
        description: new FormControl(null, [Validators.required, Validators.maxLength(700)]),
        terms: new FormControl(false, Validators.requiredTrue)
      });
    } else {
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
  }

  onAddNoticeFormSubmit() {
    if (this.addNoticeForm.valid) {
      console.log('ogłoszenie dodane');
    }
  }
}
