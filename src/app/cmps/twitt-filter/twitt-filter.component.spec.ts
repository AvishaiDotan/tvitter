import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetFilterComponent } from './tweet-filter.component';

describe('TweetFilterComponent', () => {
  let component: TweetFilterComponent;
  let fixture: ComponentFixture<TweetFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
