import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MainComponent} from './main/main.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class HomeModule {
}
