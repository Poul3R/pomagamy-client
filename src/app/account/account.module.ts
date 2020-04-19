import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {AccountRoutingModule} from './account-routing.module';
import {SharedModule} from '../shared/shared.module';
import { DashboardNoticeComponent } from './dashboard/dashboard-notice/dashboard-notice.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    // CommonModule
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    SettingsComponent,
    DashboardNoticeComponent,
  ]
})
export class AccountModule {
}
