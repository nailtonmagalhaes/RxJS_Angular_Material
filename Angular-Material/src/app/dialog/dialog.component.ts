import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public message = '';

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: 'Bazinga',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.message = result !== undefined ? result : '';
    });
  }

}
