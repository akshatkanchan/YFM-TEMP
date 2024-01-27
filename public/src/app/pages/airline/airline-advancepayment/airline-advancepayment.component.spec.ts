import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineAdvancepaymentComponent } from './airline-advancepayment.component';

describe('AirlineAdvancepaymentComponent', () => {
  let component: AirlineAdvancepaymentComponent;
  let fixture: ComponentFixture<AirlineAdvancepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineAdvancepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineAdvancepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
