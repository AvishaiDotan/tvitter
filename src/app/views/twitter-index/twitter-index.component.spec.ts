import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterIndexComponent } from './twitter-index.component';

describe('TwitterIndexComponent', () => {
  let component: TwitterIndexComponent;
  let fixture: ComponentFixture<TwitterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
