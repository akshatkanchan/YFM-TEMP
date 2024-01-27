import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightReceiptComponent } from './add-flight-receipt.component';

describe('AddFlightReceiptComponent', () => {
  let component: AddFlightReceiptComponent;
  let fixture: ComponentFixture<AddFlightReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlightReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
