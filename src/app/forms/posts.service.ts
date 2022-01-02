import { Injectable } from '@angular/core';
import { Post, PostDeleteRequestResponseObject, PostGetRequestResponseObject, PostPostRequestResponseObject, PostPutRequestObject, PostPutRequestResponseObject, PostsGetRequestResponseObject } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdatedSubject: Subject<Post[]> = new Subject<Post[]>();

  private base_URL: string = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  getPosts(): Post[] {
    this.httpClient.get<PostsGetRequestResponseObject>(`${this.base_URL}/posts`)
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
    this.httpClient.post<PostPostRequestResponseObject>(`${this.base_URL}/posts`, postRequest)
    .subscribe((postResponse)=>{
      if (postResponse.addedPostSuccessful && postResponse.post_id) {
        // success
        console.log(postResponse.message);
        // add created id to post
        copy_post.id = postResponse.post_id;
        this.posts.push(copy_post);
        this.postsUpdatedSubject.next(JSON.parse(JSON.stringify(this.posts)));
      }

    });
  }

  deletePost(post_id: string) {
    this.httpClient.delete<PostDeleteRequestResponseObject>(`${this.base_URL}/posts/${post_id}`)
    .subscribe(()=>{
      console.log(`Deleted post: ${post_id}`);
      // update posts from cloud
      // this.getPosts();

      // update posts locally
      const updatedPosts = this.posts.filter(post=> post.id != post_id);
      this.posts = updatedPosts;
      this.postsUpdatedSubject.next(JSON.parse(JSON.stringify(this.posts)));
    });
  }

  getPost(postId: string) {
    return this.httpClient.get<PostGetRequestResponseObject>(`${this.base_URL}/posts/${postId}`);
  }

  updatePost(postId: string, post: Post) {
    const newPost = JSON.parse(JSON.stringify(post));
    console.log(newPost);
    const request: PostPutRequestObject = {post: newPost};
    this.httpClient.put<PostPutRequestResponseObject>(`${this.base_URL}/posts/${postId}`, request)
    .subscribe((response)=>{
      if (response.putSucceed) {
        console.log("update post succeed");
        // locally update posts
        const updatedPosts = JSON.parse(JSON.stringify(this.posts));
        const updateIndex = updatedPosts.findIndex((p:Post)=>p.id === postId);
        updatedPosts[updateIndex] = newPost;
        this.posts = updatedPosts;
        this.postsUpdatedSubject.next(JSON.parse(JSON.stringify(this.posts)));
      } else {
        console.log("update post failed");
      }
    });
  }
}
