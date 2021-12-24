import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.css']
})
export class ShowFormsComponent implements OnInit, OnDestroy {

  posts: Post[] = [
    {author: "Steve", title: "Cool pic", profile_pic:"", post_img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", post_description:"HAHAHAHA adwswdw"},
    {author: "Alice", profile_pic:"", post_img:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80", post_description:"Yo alice here"},
    {author: "Newton", profile_pic:"", post_img:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", post_description:"Newton here"},
  ];

  private postsSubscription: Subscription|null = null;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSubscription = this.postsService.getPostsUpdatedListener()
    .subscribe((posts:Post[])=>{this.posts = posts});
  }

  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }
}
