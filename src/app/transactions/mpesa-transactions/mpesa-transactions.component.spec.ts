import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpesaTransactionsComponent } from './mpesa-transactions.component';

describe('MpesaTransactionsComponent', () => {
  let component: MpesaTransactionsComponent;
  let fixture: ComponentFixture<MpesaTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpesaTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpesaTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
