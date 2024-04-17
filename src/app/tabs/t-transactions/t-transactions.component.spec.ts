import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTransactionsComponent } from './t-transactions.component';

describe('TTransactionsComponent', () => {
  let component: TTransactionsComponent;
  let fixture: ComponentFixture<TTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
