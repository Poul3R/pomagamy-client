import {Component, OnInit} from '@angular/core';
import {NoticeService} from '../../services/notice.service';
import {NoticeInterface} from '../../interfaces/notice.interface';

@Component({
  selector: 'app-search-notice',
  templateUrl: './search-notice.component.html',
  styleUrls: ['./search-notice.component.scss'],
})

export class SearchNoticeComponent implements OnInit {
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
