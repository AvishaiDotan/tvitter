import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTweetModalComponent } from './add-tweet-modal.component';

describe('AddTweetModalComponent', () => {
  let component: AddTweetModalComponent;
  let fixture: ComponentFixture<AddTweetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTweetModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTweetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
