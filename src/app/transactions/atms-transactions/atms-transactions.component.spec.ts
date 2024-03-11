import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsTransactionsComponent } from './atms-transactions.component';

describe('AtmsTransactionsComponent', () => {
  let component: AtmsTransactionsComponent;
  let fixture: ComponentFixture<AtmsTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmsTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
