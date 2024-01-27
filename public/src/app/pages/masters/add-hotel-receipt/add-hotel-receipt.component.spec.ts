import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHotelReceiptComponent } from './add-hotel-receipt.component';

describe('AddHotelReceiptComponent', () => {
  let component: AddHotelReceiptComponent;
  let fixture: ComponentFixture<AddHotelReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHotelReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
