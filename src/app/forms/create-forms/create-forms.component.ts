import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-forms',
  templateUrl: './create-forms.component.html',
  styleUrls: ['./create-forms.component.css']
})
export class CreateFormsComponent implements OnInit {
  postDescriptionAreaText: string = "";
  submittedPostDescriptionText: string = "";
  postTitleText: string = "";

  post : {title?: string, description?:string, author:string, image?:string} = {author:"Steve"};
  @Output() postCreatedEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  OnPostClicked() {
    this.submittedPostDescriptionText = this.postDescriptionAreaText;

    this.post.description = this.postDescriptionAreaText
    this.post.title = this.postTitleText;

    const e = {post: this.post};
    this.postCreatedEventEmitter.emit(e);
  }

}
