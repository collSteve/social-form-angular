import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdatedSubject: Subject<Post[]> = new Subject<Post[]>();

  constructor() { }

  getPosts(): Post[] {
    return JSON.parse(JSON.stringify(this.posts));
  }

  getPostsUpdatedListener() {
    return this.postsUpdatedSubject.asObservable();
  }

  addPost(post: Post) {
    const copy_post:Post = JSON.parse(JSON.stringify(post));
    this.posts.push(copy_post);
    this.postsUpdatedSubject.next(this.getPosts());
  }
}
