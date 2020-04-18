import {Component, Input, OnInit} from '@angular/core';
import {NoticeInterface} from '../../shared/interfaces/notice.interface';
import {NoticeService} from '../../shared/services/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  @Input() notice: NoticeInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
