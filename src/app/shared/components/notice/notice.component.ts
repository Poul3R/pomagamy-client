import {Component, Input, OnInit} from '@angular/core';
import {NoticeInterface} from '../../interfaces/notice.interface';
import {NoticeService} from '../../services/notice.service';

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
