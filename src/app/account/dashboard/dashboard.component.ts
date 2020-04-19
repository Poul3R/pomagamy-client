import {Component, OnInit} from '@angular/core';
import {NoticeInterface} from '../../shared/interfaces/notice.interface';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  noticeInProgress: NoticeInterface[] = [];
  noticeEnded: NoticeInterface[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.noticeInProgress = this.userService.getInProgressNotices();
    this.noticeEnded = this.userService.getEndedNotices();
  }

}
