import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {NoticeInterface} from '../../../interfaces/notice.interface';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  notice: NoticeInterface;

  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.notice = this.data;

    console.log(this.data);
  }


  onAccept() {
    // this.data.success = true;
    this.dialogRef.close();
  }

  onLeave() {
    // this.data.success = false;
    this.dialogRef.close();
  }
}
