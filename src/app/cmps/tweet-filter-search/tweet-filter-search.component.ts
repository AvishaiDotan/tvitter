import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounce } from 'lodash';

import { TweetFilter } from '../../models';
import { TwitterService } from '../../service/twitter.service';

@Component({
  selector: 'tweet-filter-search',
  templateUrl: './tweet-filter-search.component.html',
  styleUrls: ['./tweet-filter-search.component.scss']
})
export class TweetFilterSearchComponent implements OnInit, OnDestroy {
  filterBy!: TweetFilter
  subscription!: Subscription
  handleSearchChange!: () => void
  
  constructor(private twitterService: TwitterService) {}

  ngOnInit(): void {
    this.subscription = this.twitterService.tweetFilter$.subscribe(filterBy => {
      this.filterBy = filterBy
    })

    this.handleSearchChange = debounce(this.doChangeFilter, 500)
  }

  doChangeFilter() {
    this.twitterService.setFilter({ ...this.filterBy })
    console.log(this.filterBy);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
