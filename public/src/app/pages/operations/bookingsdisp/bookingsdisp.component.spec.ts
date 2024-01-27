import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsdispComponent } from './bookingsdisp.component';

describe('BookingsdispComponent', () => {
  let component: BookingsdispComponent;
  let fixture: ComponentFixture<BookingsdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
