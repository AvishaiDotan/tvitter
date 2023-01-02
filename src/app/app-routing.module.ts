import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwitterIndexComponent } from './views/twitter-index/twitter-index.component';
import { TweetDetailsComponent } from './views/tweet-details/tweet-details.component';
import { SignupComponent } from './views/signup/signup.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TweetResolver } from './service/tweet.resolver';

const routes: Routes = [
  {
    path: 'tweet/:id',
    component: TweetDetailsComponent,
    title: 'Tweet',
    resolve: {tweet: TweetResolver}
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile'
  },
  {
    path: 'home',
    component: TwitterIndexComponent,
    title: 'Home'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
