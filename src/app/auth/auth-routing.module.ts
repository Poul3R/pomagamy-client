import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const authRoute: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'logowanie',
    component: LoginComponent
  },
  {
    path: 'rejestracja',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoute)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
