import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-yes-no',
  templateUrl: './dialog-yes-no.component.html',
  styleUrls: ['./dialog-yes-no.component.scss']
})
export class DialogYesNoComponent implements OnInit {

  public isConfirmed = false;

  constructor(
    public matDialogRef: MatDialogRef<DialogYesNoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.isConfirmed = true;
    this.matDialogRef.close(this.isConfirmed);
  }

}
