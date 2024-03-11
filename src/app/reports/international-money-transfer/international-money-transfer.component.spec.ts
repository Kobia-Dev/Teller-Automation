import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalMoneyTransferComponent } from './international-money-transfer.component';

describe('InternationalMoneyTransferComponent', () => {
  let component: InternationalMoneyTransferComponent;
  let fixture: ComponentFixture<InternationalMoneyTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalMoneyTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalMoneyTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
