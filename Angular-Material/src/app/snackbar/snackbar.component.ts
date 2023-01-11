import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.snackBar.open('Hello People', 'Fechar', { duration: 2000 });
  }

  public openSnackBar() {
    const snackBar = this.snackBar.open('Hello People', 'Fechar', { duration: 2000 });
    snackBar.afterDismissed().subscribe(_ => console.log('DISMISSED'));
    snackBar.onAction().subscribe(_ => console.log('After Action'));
  }

  public openFromComp() {
    this.snackBar.openFromComponent(SnackbarMsnComponent, {
      data:'Hello People',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2500
    })
  }

}
