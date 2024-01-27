import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdutyslipComponent } from './viewdutyslip.component';

describe('ViewdutyslipComponent', () => {
  let component: ViewdutyslipComponent;
  let fixture: ComponentFixture<ViewdutyslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdutyslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdutyslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
