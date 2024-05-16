import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsansactionPerTellerComponent } from './trsansaction-per-teller.component';

describe('TrsansactionPerTellerComponent', () => {
  let component: TrsansactionPerTellerComponent;
  let fixture: ComponentFixture<TrsansactionPerTellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrsansactionPerTellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrsansactionPerTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
