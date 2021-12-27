import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddImageDialogData, AddImageDialogResult } from './add-image-dialog.model';

@Component({
  selector: 'app-add-image-dialog',
  templateUrl: './add-image-dialog.component.html',
  styleUrls: ['./add-image-dialog.component.css']
})
export class AddImageDialogComponent implements OnInit {
  img_link: string| null = null;

  constructor(
    public dialogRef: MatDialogRef<AddImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddImageDialogData,
  ) {}

  ngOnInit(): void {
    this.dialogRef.backdropClick().subscribe(result => {
      const r: AddImageDialogResult = {submitted: false};
      this.dialogRef.close(r);
    });
  }

  onSubmit() {
    let result: AddImageDialogResult = {
      submitted: true
    }
    if (this.img_link) {
      result.img_link = this.img_link;
    } else {
      result.submitted = false;
    }

    this.dialogRef.close(result);
  }

  onCancel() {
    const result: AddImageDialogResult = {
      submitted: false
    }
    this.dialogRef.close(result);
  }
}
