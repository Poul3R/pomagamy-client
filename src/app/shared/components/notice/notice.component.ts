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

  constructor(private router: Router, public dialog: MatDialog) {
  }
  ngOnInit(): void {

  }

  onShowMore(notice: NoticeInterface) {
    // this.router.navigate(['konto']);

    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {notice: notice},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        if (this.userIsAuth) {
          // wywołać metodę z api, która przypisze użytkownikowi to zadanie do zrobienia
          // następnie przenosi go do jego tablicy
          this.router.navigate(['konto']);
        } else {
          // Przenosi użytkownika do formularza rejestracji gdzie po podaniu wszystich danych
          // wybrane zadanie zostanie automatycznie dodane do jego konta

          // todo:: Przekazać routerowi dane wybranego zadania aby po rejestracji można było od razu je przypisać
          this.router.navigate(['auth/rejestracja']);
        }

      }
    });
  }
}
