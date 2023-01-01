import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittDetailsComponent } from './twitt-details.component';

describe('TwittDetailsComponent', () => {
  let component: TwittDetailsComponent;
  let fixture: ComponentFixture<TwittDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwittDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
