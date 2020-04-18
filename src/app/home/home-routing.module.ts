import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {SearchNoticeComponent} from '../shared/components/search-notice/search-notice.component';
import {AddNoticeComponent} from './add-notice/add-notice.component';

const homeRoute: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'lista',
    component: SearchNoticeComponent
  },
  {
    path: 'dodaj-ogloszenie',
    component: AddNoticeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoute)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
