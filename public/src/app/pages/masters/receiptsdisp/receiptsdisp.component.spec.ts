import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsdispComponent } from './receiptsdisp.component';

describe('ReceiptsdispComponent', () => {
  let component: ReceiptsdispComponent;
  let fixture: ComponentFixture<ReceiptsdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptsdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
