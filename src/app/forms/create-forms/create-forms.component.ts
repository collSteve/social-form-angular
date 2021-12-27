import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, PostEmissionObject } from '../post.model';
import { PostsService } from '../posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddImageDialogComponent } from '../add-image-dialog/add-image-dialog.component';
import { AddImageDialogData, AddImageDialogResult } from '../add-image-dialog/add-image-dialog.model';

@Component({
  selector: 'app-create-forms',
  templateUrl: './create-forms.component.html',
  styleUrls: ['./create-forms.component.css']
})
export class CreateFormsComponent implements OnInit {
  post : Post = {author:"Steve", id:null};
  // postCreatedEventEmitter = new EventEmitter<PostEmissionObject>();

  num_show_images: number = 9;

  img_links: string[] = [];

  constructor(private postsService: PostsService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showImagesList() {
    const splice_max = this.img_links.length >= this.num_show_images? this.num_show_images: this.img_links.length;
    const show_images_list = [];
    for (let i = 0; i< splice_max; i++) {
      show_images_list.push(this.img_links[i]);
    }
    return show_images_list;
    // return this.img_links;
  }

  onPostClicked(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.post = {id:null, author:"Steve"};

    this.post.title = form.value.title;
    this.post.post_description = form.value.description;
    if (this.img_links.length > 0) {
      this.post.post_img = this.img_links[0];
    }

    const new_post: Post = JSON.parse(JSON.stringify(this.post));
    this.postsService.addPost(new_post);

    form.resetForm();
    this.openSnackBar("New post created successfully!", "close");

    // const e: PostEmissionObject = {post: new_post}; //  copy
    // this.postCreatedEventEmitter.emit(e);
  }

  openSnackBar(message: string, action: string) {
    const snackBarRef = this._snackBar.open(message, action, {duration: 5000}); // duration 5s
    // snackBarRef.onAction().subscribe(()=>alert("cancel pressed"));
  }

  onAddImageClicked() {
    const addImageDialogData: AddImageDialogData = {};
    const dialogRef = this.dialog.open(AddImageDialogComponent, {
      width: '250px',
      data: addImageDialogData,
    });

    dialogRef.afterClosed().subscribe((result: AddImageDialogResult) => {
      console.log('The dialog was closed');
      if (result.submitted && result.img_link) {
        this.addImgLink(result.img_link);
      }
    });
  }

  addImgLink(link: string) {
    this.img_links.push(link);
  }

}
