import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTellerComponent } from './modify-teller.component';

describe('ModifyTellerComponent', () => {
  let component: ModifyTellerComponent;
  let fixture: ComponentFixture<ModifyTellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
