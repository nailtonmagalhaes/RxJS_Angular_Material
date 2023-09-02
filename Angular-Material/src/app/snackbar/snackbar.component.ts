import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) {

  }

  ngOnInit(): void {
    // this.snackbar.open('Hello word', 'Fechar', {
    //   duration: 2000
    // });
  }

  public openSnackBar() {
    const snackBar = this.snackbar.open('Hello word', 'Fechar', {
      duration: 2000
    });

    snackBar.afterDismissed().subscribe(_ => {
      console.log('DISMISSED');
    });

    snackBar.onAction().subscribe(_ => {
      console.log('AFTER ACTION');
    })
  }

  public openFromCom() {
    this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data: 'Hello people'
    });
  }

}
