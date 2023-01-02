import { TestBed } from '@angular/core/testing';

import { TweetResolver } from './tweet.resolver';

describe('TweetResolver', () => {
  let resolver: TweetResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TweetResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
