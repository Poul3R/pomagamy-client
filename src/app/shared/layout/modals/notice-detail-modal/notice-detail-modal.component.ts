import {Component, Input} from '@angular/core';
import {NoticeInterface} from '../../../interfaces/notice.interface';

@Component({
  selector: 'app-notice-detail-modal',
  templateUrl: 'notice-detail-modal.component.html',
  styleUrls: ['notice-detail-modal.component.scss']
})
export class NoticeDetailModalComponent {
  checkboxSelected = false;
  @Input() notice: NoticeInterface;

  onCheckbox() {
    this.checkboxSelected = !this.checkboxSelected;
  }
}
