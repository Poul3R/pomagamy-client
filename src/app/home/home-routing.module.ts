import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {SearchNoticeComponent} from '../shared/components/search-notice/search-notice.component';

const homeRoute: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'list',
    component: SearchNoticeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoute)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
