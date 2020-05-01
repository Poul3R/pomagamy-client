import {Component, Input, OnInit} from '@angular/core';
import {NoticeInterface} from '../../interfaces/notice.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../../layout/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  @Input() notice: NoticeInterface;
  success: boolean;
  userIsAuth: boolean;

  showModal = false;

  constructor(private router: Router) {
  }
  ngOnInit(): void {

  }

  onShowMoreModal(notice: NoticeInterface) {
    this.showModal = true;
  }

  onCancelModal() {
    this.showModal = false;
  }
}
