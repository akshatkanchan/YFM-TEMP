import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingitemdisplayComponent } from './billingitemdisplay.component';

describe('BillingitemdisplayComponent', () => {
  let component: BillingitemdisplayComponent;
  let fixture: ComponentFixture<BillingitemdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingitemdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingitemdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
