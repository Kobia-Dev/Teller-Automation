import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveReferralsComponent } from './approve-referrals.component';

describe('ApproveReferralsComponent', () => {
  let component: ApproveReferralsComponent;
  let fixture: ComponentFixture<ApproveReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveReferralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
