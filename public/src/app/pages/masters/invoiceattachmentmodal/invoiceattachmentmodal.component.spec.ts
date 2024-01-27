import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceattachmentmodalComponent } from './invoiceattachmentmodal.component';

describe('InvoiceattachmentmodalComponent', () => {
  let component: InvoiceattachmentmodalComponent;
  let fixture: ComponentFixture<InvoiceattachmentmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceattachmentmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceattachmentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
