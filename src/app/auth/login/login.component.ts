import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showCredentialsError = false;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    // todo:: Odkomentować gdy już będzie można
    // if (this.authService.isAuth()) {
    //   this.router.navigate(['konto']);
    // }

    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      // todo:: Wywołać metodę pobierania tokenu
      return;
    }
  }
}
