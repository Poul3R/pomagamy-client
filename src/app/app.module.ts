import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MainComponent } from './home/main/main.component';
import { NoticeListComponent } from './home/notice-list/notice-list.component';
import { NoticeComponent } from './home/notice-list/notice/notice.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { InProgressComponent } from './account/dashboard/in-progress/in-progress.component';
import { InProgressBoxComponent } from './account/dashboard/in-progress-box/in-progress-box.component';
import { FinishedBoxComponent } from './account/dashboard/finished-box/finished-box.component';
import { SettingsComponent } from './account/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    NoticeListComponent,
    NoticeComponent,
    DashboardComponent,
    InProgressComponent,
    InProgressBoxComponent,
    FinishedBoxComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
