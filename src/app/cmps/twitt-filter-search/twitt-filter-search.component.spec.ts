import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittFilterSearchComponent } from './twitt-filter-search.component';

describe('TwittFilterSearchComponent', () => {
  let component: TwittFilterSearchComponent;
  let fixture: ComponentFixture<TwittFilterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittFilterSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwittFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
