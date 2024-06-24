import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerReportComponent } from './teller-report.component';

describe('TellerReportComponent', () => {
  let component: TellerReportComponent;
  let fixture: ComponentFixture<TellerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
