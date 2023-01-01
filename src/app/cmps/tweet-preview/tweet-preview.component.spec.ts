import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPreviewComponent } from './tweet-preview.component';

describe('TweetPreviewComponent', () => {
  let component: TweetPreviewComponent;
  let fixture: ComponentFixture<TweetPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
