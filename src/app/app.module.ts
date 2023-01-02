import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { TwitterIndexComponent } from './views/twitter-index/twitter-index.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { TwitterListComponent } from './cmps/twitter-list/twitter-list.component';
import { AddTweetFormComponent } from './cmps/add-tweet-form/add-tweet-form.component';
import { TweetPreviewComponent } from './cmps/tweet-preview/tweet-preview.component';
import { TweetDetailsComponent } from './views/tweet-details/tweet-details.component';
import { TweetFilterComponent } from './cmps/tweet-filter/tweet-filter.component';
import { TweetFilterSearchComponent } from './cmps/tweet-filter-search/tweet-filter-search.component';
import { TweetFilterTagsComponent } from './cmps/tweet-filter-tags/tweet-filter-tags.component';
import { SignupComponent } from './views/signup/signup.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AddReplyComponent } from './cmps/add-reply/add-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterIndexComponent,
    AppHeaderComponent,
    TwitterListComponent,
    AddTweetFormComponent,
    TweetPreviewComponent,
    TweetDetailsComponent,
    TweetFilterComponent,
    TweetFilterSearchComponent,
    TweetFilterTagsComponent,
    SignupComponent,
    ProfileComponent,
    AddReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
