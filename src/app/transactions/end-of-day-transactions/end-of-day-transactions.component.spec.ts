import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfDayTransactionsComponent } from './end-of-day-transactions.component';

describe('EndOfDayTransactionsComponent', () => {
  let component: EndOfDayTransactionsComponent;
  let fixture: ComponentFixture<EndOfDayTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfDayTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfDayTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
