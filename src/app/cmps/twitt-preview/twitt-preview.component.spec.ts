import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittPreviewComponent } from './twitt-preview.component';

describe('TwittPreviewComponent', () => {
  let component: TwittPreviewComponent;
  let fixture: ComponentFixture<TwittPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwittPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
