import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { MatDialog } from '@angular/material/dialog';
import { PostOptionsDialogComponent } from './post-options-dialog/post-options-dialog.component';
import { PostOptionsDialogInitData, PostOptionsDialogReturnData, PostReturnAction } from './post-options-dialog/postOptions.model';

@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.css']
})
export class ShowFormsComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  private postsSubscription: Subscription|null = null;

  isLoading:boolean = false;

  constructor(private postsService: PostsService, public optionsDialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.posts = this.postsService.getPosts();
    this.postsSubscription = this.postsService.getPostsUpdatedListener()
    .subscribe((posts:Post[])=>{
      this.posts = posts;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  onPostOptionsClicked(post_id: string|null) {
    if (!post_id) return;
    const postOptionsInitData: PostOptionsDialogInitData = {post_id:post_id};

    const dialogRef = this.optionsDialog.open(PostOptionsDialogComponent, {
      width: '250px',
      data: postOptionsInitData,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((result: PostOptionsDialogReturnData) => {
      console.log('The dialog was closed');
      if (result.action == PostReturnAction.Delete) {
        console.log(`deleting id:${post_id}`);
        this.postsService.deletePost(post_id);
      }
      else if (result.action == PostReturnAction.Edit) {
        console.log(`editing id:${post_id}`);
      }
    });
  }


  devStringify(o: any) {
    return JSON.stringify(o);
  }
}
