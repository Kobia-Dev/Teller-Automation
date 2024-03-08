import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTellerComponent } from './add-teller.component';

describe('AddTellerComponent', () => {
  let component: AddTellerComponent;
  let fixture: ComponentFixture<AddTellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
