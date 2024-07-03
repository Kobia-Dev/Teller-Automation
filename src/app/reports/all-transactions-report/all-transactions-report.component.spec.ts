import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransactionsReportComponent } from './all-transactions-report.component';

describe('AllTransactionsReportComponent', () => {
  let component: AllTransactionsReportComponent;
  let fixture: ComponentFixture<AllTransactionsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTransactionsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransactionsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
