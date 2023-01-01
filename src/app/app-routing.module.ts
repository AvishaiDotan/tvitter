import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwitterIndexComponent } from './views/twitter-index/twitter-index.component';
import { TweetDetailsComponent } from './views/tweet-details/tweet-details.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: TwitterIndexComponent,
    title: 'Home'
  },
  {
    path: 'tweet/:id',
    component: TweetDetailsComponent,
    title: 'Tweet'
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup'
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
