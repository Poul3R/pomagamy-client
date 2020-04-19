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
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    NavbarComponent,
  ],
  declarations: [
    SearchNoticeComponent,
    NoticeComponent,
    NavbarComponent,
  ]
})
export class SharedModule {
}
