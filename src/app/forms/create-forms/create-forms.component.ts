import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, PostEmissionObject } from '../post.model';
import { PostsService } from '../posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-forms',
  templateUrl: './create-forms.component.html',
  styleUrls: ['./create-forms.component.css']
})
export class CreateFormsComponent implements OnInit {
  post : Post = {author:"Steve"};
  // postCreatedEventEmitter = new EventEmitter<PostEmissionObject>();

  constructor(private postsService: PostsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onPostClicked(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.post.title = form.value.title;
    this.post.post_description = form.value.description;

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

}
