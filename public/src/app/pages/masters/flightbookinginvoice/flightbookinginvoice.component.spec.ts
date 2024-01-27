import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbookinginvoiceComponent } from './flightbookinginvoice.component';

describe('FlightbookinginvoiceComponent', () => {
  let component: FlightbookinginvoiceComponent;
  let fixture: ComponentFixture<FlightbookinginvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightbookinginvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightbookinginvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
