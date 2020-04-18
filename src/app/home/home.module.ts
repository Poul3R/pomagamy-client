import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main/main.component';
import {HomeRoutingModule} from './home-routing.module';
import { AddNoticeComponent } from './add-notice/add-notice.component';

@NgModule({
  declarations: [
    MainComponent,
    AddNoticeComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class HomeModule {
}
