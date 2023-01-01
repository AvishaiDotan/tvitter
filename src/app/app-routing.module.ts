import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwitterIndexComponent } from './views/twitter-index/twitter-index.component';
import { TweetDetailsComponent } from './views/tweet-details/tweet-details.component';

const routes: Routes = [
  {
    path: '/',
    redirectTo: '/home'
  },
  {
    path: '/home',
    component: TwitterIndexComponent,
    title: 'Home'
  },
  {
    path: '/tweet/:id',
    component: TweetDetailsComponent,
    title: 'Tweet'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
