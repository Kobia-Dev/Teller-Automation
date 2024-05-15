import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGlsComponent } from './view-gls.component';

describe('ViewGlsComponent', () => {
  let component: ViewGlsComponent;
  let fixture: ComponentFixture<ViewGlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
