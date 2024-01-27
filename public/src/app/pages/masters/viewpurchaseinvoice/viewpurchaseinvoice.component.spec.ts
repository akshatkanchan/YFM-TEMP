import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpurchaseinvoiceComponent } from './viewpurchaseinvoice.component';

describe('ViewpurchaseinvoiceComponent', () => {
  let component: ViewpurchaseinvoiceComponent;
  let fixture: ComponentFixture<ViewpurchaseinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpurchaseinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpurchaseinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
