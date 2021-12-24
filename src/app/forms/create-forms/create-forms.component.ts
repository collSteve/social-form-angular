import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post, PostEmissionObject } from '../post.model';

@Component({
  selector: 'app-create-forms',
  templateUrl: './create-forms.component.html',
  styleUrls: ['./create-forms.component.css']
})
export class CreateFormsComponent implements OnInit {
  postDescriptionAreaText: string = "";
  submittedPostDescriptionText: string = "";
  postTitleText: string = "";

  post : Post = {author:"Steve"};
  @Output() postCreatedEventEmitter = new EventEmitter<PostEmissionObject>();

  constructor() { }

  ngOnInit(): void {
  }

  OnPostClicked() {
    this.submittedPostDescriptionText = this.postDescriptionAreaText;

    this.post.post_description = this.postDescriptionAreaText
    this.post.title = this.postTitleText;

    const e: PostEmissionObject = {post: JSON.parse(JSON.stringify(this.post))}; //  copy
    this.postCreatedEventEmitter.emit(e);
  }

}
