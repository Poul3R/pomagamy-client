import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {InProgressBoxComponent} from './dashboard/in-progress-box/in-progress-box.component';
import {FinishedBoxComponent} from './dashboard/finished-box/finished-box.component';

@NgModule({
  imports: [],
  exports: [],
  declarations: [
    DashboardComponent,
    SettingsComponent,
    InProgressBoxComponent,
    FinishedBoxComponent,
  ]
})
export class AccountModule {
}
