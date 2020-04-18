import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class AuthModule {
}
