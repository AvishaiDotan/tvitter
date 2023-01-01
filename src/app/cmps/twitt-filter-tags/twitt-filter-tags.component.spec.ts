import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetFilterTagsComponent } from './tweet-filter-tags.component';

describe('TweetFilterTagsComponent', () => {
  let component: TweetFilterTagsComponent;
  let fixture: ComponentFixture<TweetFilterTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetFilterTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetFilterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
