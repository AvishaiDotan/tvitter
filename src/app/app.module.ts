import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { TwitterIndexComponent } from './views/twitter-index/twitter-index.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { TwitterListComponent } from './cmps/twitter-list/twitter-list.component';
import { AddTwittFormComponent } from './cmps/add-twitt-form/add-twitt-form.component';
import { TwittPreviewComponent } from './cmps/twitt-preview/twitt-preview.component';
import { TwittDetailsComponent } from './cmps/twitt-details/twitt-details.component';
import { TwittFilterComponent } from './cmps/twitt-filter/twitt-filter.component';
import { TwittFilterSearchComponent } from './cmps/twitt-filter-search/twitt-filter-search.component';
import { TwittFilterTagsComponent } from './cmps/twitt-filter-tags/twitt-filter-tags.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TwitterIndexComponent,
    AppHeaderComponent,
    TwitterListComponent,
    AddTwittFormComponent,
    TwittPreviewComponent,
    TwittDetailsComponent,
    TwittFilterComponent,
    TwittFilterSearchComponent,
    TwittFilterTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
