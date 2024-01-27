import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaAdvancepaymentComponent } from './visa-advancepayment.component';

describe('VisaAdvancepaymentComponent', () => {
  let component: VisaAdvancepaymentComponent;
  let fixture: ComponentFixture<VisaAdvancepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaAdvancepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaAdvancepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
