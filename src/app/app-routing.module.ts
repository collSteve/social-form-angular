import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateFormsComponent } from './forms/create-forms/create-forms.component';
import { ShowFormsComponent } from './forms/show-forms/show-forms.component';
import { DevShowCreatePostComponent } from './forms/dev-show-create-post/dev-show-create-post.component';

const routes: Routes = [
  {path: "create-post", component: CreateFormsComponent},
  {path: "show-posts", component: ShowFormsComponent},
  {path: "dev", component: DevShowCreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
