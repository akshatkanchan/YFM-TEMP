import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisaReceiptComponent } from './add-visa-receipt.component';

describe('AddVisaReceiptComponent', () => {
  let component: AddVisaReceiptComponent;
  let fixture: ComponentFixture<AddVisaReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisaReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisaReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
