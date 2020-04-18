import {NgModule} from '@angular/core';
import {SharedRoutingModule} from './shared-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule, MatList} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SearchNoticeComponent} from './components/search-notice/search-notice.component';
import {NoticeComponent} from './components/notice/notice.component';

@NgModule({
  imports: [
    SharedRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,

  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,

  ],
  declarations: [
    SearchNoticeComponent,
    NoticeComponent,
  ]
})
export class SharedModule {
}
