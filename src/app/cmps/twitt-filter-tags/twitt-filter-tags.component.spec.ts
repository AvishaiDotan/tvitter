import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittFilterTagsComponent } from './twitt-filter-tags.component';

describe('TwittFilterTagsComponent', () => {
  let component: TwittFilterTagsComponent;
  let fixture: ComponentFixture<TwittFilterTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittFilterTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwittFilterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
