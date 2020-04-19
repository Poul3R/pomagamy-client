import {Component, Input, OnInit} from '@angular/core';
import {NoticeInterface} from '../../../shared/interfaces/notice.interface';

@Component({
  selector: 'app-dashboard-notice',
  templateUrl: './dashboard-notice.component.html',
  styleUrls: ['./dashboard-notice.component.scss']
})
export class DashboardNoticeComponent implements OnInit {
  @Input() notice: NoticeInterface;
  @Input() inProgress: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
