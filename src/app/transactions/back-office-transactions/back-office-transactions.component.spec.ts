import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeTransactionsComponent } from './back-office-transactions.component';

describe('BackOfficeTransactionsComponent', () => {
  let component: BackOfficeTransactionsComponent;
  let fixture: ComponentFixture<BackOfficeTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOfficeTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
