import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittFilterComponent } from './twitt-filter.component';

describe('TwittFilterComponent', () => {
  let component: TwittFilterComponent;
  let fixture: ComponentFixture<TwittFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwittFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
