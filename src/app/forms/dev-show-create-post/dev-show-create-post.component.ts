import { Component, OnInit } from '@angular/core';
import { Post, PostEmissionObject } from '../post.model';

@Component({
  selector: 'app-dev-show-create-post',
  templateUrl: './dev-show-create-post.component.html',
  styleUrls: ['./dev-show-create-post.component.css']
})
export class DevShowCreatePostComponent implements OnInit {

  storedPosts: Post[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  onPostAdded(e: PostEmissionObject) {
    this.storedPosts.push(e.post);
  }

}
