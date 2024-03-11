import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellersTransactionsComponent } from './tellers-transactions.component';

describe('TellersTransactionsComponent', () => {
  let component: TellersTransactionsComponent;
  let fixture: ComponentFixture<TellersTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellersTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TellersTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
