import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NoticeInterface} from '../../../interfaces/notice.interface';
import {Router} from '@angular/router';
import {NoticeService} from '../../../services/notice.service';

@Component({
  selector: 'app-notice-detail-modal',
  templateUrl: 'notice-detail-modal.component.html',
  styleUrls: ['notice-detail-modal.component.scss']
})
export class NoticeDetailModalComponent {
  checkboxSelected = false;
  @Input() notice: NoticeInterface;
  @Output() displayModal = new EventEmitter<boolean>();
  errorOccurred = false;

  constructor(private router: Router, private noticeService: NoticeService) {
  }

  onCheckbox() {
    this.checkboxSelected = !this.checkboxSelected;

    this.errorOccurred = this.checkboxSelected !== true;
  }

  onCloseModal() {
    this.displayModal.emit(false);
  }

  onAccept() {
    if (this.checkboxSelected) {
      this.errorOccurred = false;

      this.noticeService.addNoticeToUser(this.notice.id).subscribe(
        response => {
          this.displayModal.emit(false);
          this.router.navigate(['/konto']);
        }, error => {
          // show error on modal
          console.log(error);
        }
      );
    } else {
      this.errorOccurred = true;
    }
  }
}
