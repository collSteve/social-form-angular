import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateFormsComponent } from './forms/create-forms/create-forms.component';
import { ShowFormsComponent } from './forms/show-forms/show-forms.component';
import { DevShowCreatePostComponent } from './forms/dev-show-create-post/dev-show-create-post.component';
import { SinglePostViewComponent } from './forms/single-post-view/single-post-view.component';

const routes: Routes = [
  { path: '',   redirectTo: '/show-posts', pathMatch: 'full' },
  {path: "create-post", component: CreateFormsComponent},
  {path: "show-posts", component: ShowFormsComponent},
  {path: "dev", component: DevShowCreatePostComponent},
  {path: "post/:postId", component: SinglePostViewComponent},
  {path: "post/edit/:postId", component: CreateFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
