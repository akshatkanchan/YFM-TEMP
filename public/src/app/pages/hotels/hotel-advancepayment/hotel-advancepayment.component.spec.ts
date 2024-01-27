import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAdvancepaymentComponent } from './hotel-advancepayment.component';

describe('HotelAdvancepaymentComponent', () => {
  let component: HotelAdvancepaymentComponent;
  let fixture: ComponentFixture<HotelAdvancepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelAdvancepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAdvancepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
