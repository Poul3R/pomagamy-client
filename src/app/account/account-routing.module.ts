import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';

const accountRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule {
}
