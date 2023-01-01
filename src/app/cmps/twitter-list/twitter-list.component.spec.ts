import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterListComponent } from './twitter-list.component';

describe('TwitterListComponent', () => {
  let component: TwitterListComponent;
  let fixture: ComponentFixture<TwitterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
