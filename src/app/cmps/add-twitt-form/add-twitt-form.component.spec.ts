import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTwittFormComponent } from './add-twitt-form.component';

describe('AddTwittFormComponent', () => {
  let component: AddTwittFormComponent;
  let fixture: ComponentFixture<AddTwittFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTwittFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTwittFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
