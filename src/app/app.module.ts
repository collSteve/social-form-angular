import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormsComponent } from './forms/create-forms/create-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowFormsComponent } from './forms/show-forms/show-forms.component';
import { FormDescriptionsComponent } from './forms/show-forms/form-descriptions/form-descriptions.component';
import { HeaderComponent } from './header/header.component';
import { DevShowCreatePostComponent } from './forms/dev-show-create-post/dev-show-create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormsComponent,
    ShowFormsComponent,
    FormDescriptionsComponent,
    HeaderComponent,
    DevShowCreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
