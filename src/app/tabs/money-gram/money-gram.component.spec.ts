import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyGramComponent } from './money-gram.component';

describe('MoneyGramComponent', () => {
  let component: MoneyGramComponent;
  let fixture: ComponentFixture<MoneyGramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyGramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyGramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
