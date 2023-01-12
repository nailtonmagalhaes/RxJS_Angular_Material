import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { DialogYesNoComponent } from './dialog-yes-no/dialog-yes-no.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public message = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: 'Bazinga',
      disableClose: true,
      hasBackdrop: true,
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms'
    });
    dialogRef.afterClosed().subscribe(res => {
      this.message = res ? res : '';
    });
  }

  public openConfirmationDialog() {
    const dialogRef = this.dialog.open(DialogYesNoComponent, {
      data: {
        title: 'Confirmar exclusão',
        message: 'Tem certeza que deseja realizar essa operação?'
      },
      disableClose: true,
      hasBackdrop: true,
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms'
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.message = res !== undefined ? res : '';
    });
  }

}
