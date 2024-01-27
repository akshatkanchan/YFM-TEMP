import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingdispinvoiceComponent } from './bookingdispinvoice.component';

describe('BookingdispinvoiceComponent', () => {
  let component: BookingdispinvoiceComponent;
  let fixture: ComponentFixture<BookingdispinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingdispinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingdispinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
