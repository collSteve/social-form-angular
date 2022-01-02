import { Component, OnInit } from '@angular/core';
import { Post, PostGetRequestResponseObject } from '../post.model';
import { MatDialog } from '@angular/material/dialog';
import { PostsService } from '../posts.service';
import { PostOptionsDialogComponent } from '../show-forms/post-options-dialog/post-options-dialog.component';

import { PostOptionsDialogInitData, PostOptionsDialogReturnData, PostReturnAction } from '../show-forms/post-options-dialog/postOptions.model';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styleUrls: ['./single-post-view.component.css']
})
export class SinglePostViewComponent implements OnInit {
  postId: string|null = null;
  post: Post = {author: "Steve", id:"x", title:"Mock Title", post_description:"Mock Description",
  post_img:"https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"};

  constructor(private postsService: PostsService, public optionsDialog: MatDialog, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has("postId")) {
        this.postId = paramMap.get("postId");
      }
      if (this.postId) {
        this.postsService.getPost(this.postId).subscribe((response:PostGetRequestResponseObject)=>{
          if (response.fetchSucceed) {
            this.post = JSON.parse(JSON.stringify(response.post));
            console.log("Get Post success");
          } else {
            console.log("Fail to fetch post...");
          }

        })
      }
    });
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

}
