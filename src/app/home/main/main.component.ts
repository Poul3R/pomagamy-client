import {Component, OnInit, NgModule} from '@angular/core';
import {NoticeService} from '../../shared/services/notice.service';
import {NoticeInterface} from '../../shared/interfaces/notice.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {
  noticesStandard: NoticeInterface[] = [];
  noticesPriority: NoticeInterface[] = [];

  cities: [
    'Warszawa',
    'Kraków',
    'Wrocław',
    'Gdańsk',
    'Gdynia',
    'Sopot',
    'Zakopane',
    'Malbork',
    'Katowice',
    'Szczecin',
    'Kielce',
    'Olsztyn'
  ];

  constructor(private noticeService: NoticeService) {
  }

  ngOnInit(): void {
    this.noticesStandard = this.noticeService.getNoticeStandardList('');
    this.noticesPriority = this.noticeService.getNoticePriorityList('');
  }

}
