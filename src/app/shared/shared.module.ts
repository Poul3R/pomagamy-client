import {NgModule} from '@angular/core';
import {SharedRoutingModule} from './shared-routing.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    SharedRoutingModule,
    MatCardModule
  ],
  exports: [
    MatCardModule
  ],
  declarations: []
})
export class SharedModule {
}
