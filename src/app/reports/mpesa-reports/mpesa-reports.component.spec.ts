import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaReportsComponent } from './mpesa-reports.component';

describe('MpesaReportsComponent', () => {
  let component: MpesaReportsComponent;
  let fixture: ComponentFixture<MpesaReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpesaReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
