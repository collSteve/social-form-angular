import { Injectable } from '@angular/core';
import { Post, PostPostRequestResponseObject, PostsGetRequestResponseObject } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdatedSubject: Subject<Post[]> = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  getPosts(): Post[] {
    this.httpClient.get<PostsGetRequestResponseObject>("http://localhost:3000/api/posts")
    .subscribe((postsRequestObject) =>{
      this.posts = postsRequestObject.posts;
      this.postsUpdatedSubject.next(JSON.parse(JSON.stringify(this.posts)));
    });
    return JSON.parse(JSON.stringify(this.posts));
  }

  getPostsUpdatedListener() {
    return this.postsUpdatedSubject.asObservable();
  }

  addPost(post: Post) {
    const copy_post:Post = JSON.parse(JSON.stringify(post));
    const postRequest = {post: copy_post};
    this.httpClient.post<PostPostRequestResponseObject>("http://localhost:3000/api/posts", postRequest)
    .subscribe((postResponse)=>{
      console.log(postResponse.message);
      this.posts.push(copy_post);
      this.postsUpdatedSubject.next(JSON.parse(JSON.stringify(this.posts)));
    });
  }
}
