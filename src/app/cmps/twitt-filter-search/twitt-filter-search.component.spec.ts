import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetFilterSearchComponent } from './tweet-filter-search.component';

describe('TweetFilterSearchComponent', () => {
  let component: TweetFilterSearchComponent;
  let fixture: ComponentFixture<TweetFilterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetFilterSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
