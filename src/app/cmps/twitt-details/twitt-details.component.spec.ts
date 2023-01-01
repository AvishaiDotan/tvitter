import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetDetailsComponent } from './tweet-details.component';

describe('TweetDetailsComponent', () => {
  let component: TweetDetailsComponent;
  let fixture: ComponentFixture<TweetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
