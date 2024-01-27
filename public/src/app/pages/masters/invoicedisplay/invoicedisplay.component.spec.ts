import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicedisplayComponent } from './invoicedisplay.component';

describe('InvoicedisplayComponent', () => {
  let component: InvoicedisplayComponent;
  let fixture: ComponentFixture<InvoicedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
