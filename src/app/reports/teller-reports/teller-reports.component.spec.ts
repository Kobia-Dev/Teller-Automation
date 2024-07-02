import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerReportsComponent } from './teller-reports.component';

describe('TellerReportsComponent', () => {
  let component: TellerReportsComponent;
  let fixture: ComponentFixture<TellerReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellerReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
