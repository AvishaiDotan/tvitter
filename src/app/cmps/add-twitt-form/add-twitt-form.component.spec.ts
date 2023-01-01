import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTweetFormComponent } from './add-tweet-form.component';

describe('AddTweetFormComponent', () => {
  let component: AddTweetFormComponent;
  let fixture: ComponentFixture<AddTweetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTweetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTweetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
