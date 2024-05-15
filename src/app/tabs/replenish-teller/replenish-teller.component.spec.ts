import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishTellerComponent } from './replenish-teller.component';

describe('ReplenishTellerComponent', () => {
  let component: ReplenishTellerComponent;
  let fixture: ComponentFixture<ReplenishTellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplenishTellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplenishTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
