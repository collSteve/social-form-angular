import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostOptionsDialogInitData, PostOptionsDialogReturnData, PostReturnAction } from './postOptions.model';

@Component({
  selector: 'app-post-options-dialog',
  templateUrl: './post-options-dialog.component.html',
  styleUrls: ['./post-options-dialog.component.css']
})
export class PostOptionsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PostOptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostOptionsDialogInitData,
  ) {}

  ngOnInit(): void {
    this.dialogRef.backdropClick().subscribe(result => {
      const r: PostOptionsDialogReturnData = {action: PostReturnAction.None};
      this.dialogRef.close(r);
    });
  }

  onDeleteClick() {
    const result: PostOptionsDialogReturnData = {action: PostReturnAction.Delete};
    this.dialogRef.close(result);
  }

  onEditClick() {
    const result: PostOptionsDialogReturnData = {action: PostReturnAction.Edit};
    this.dialogRef.close(result);
  }

}
