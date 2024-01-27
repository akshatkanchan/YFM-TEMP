import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailflightinvoiceComponent } from './mailflightinvoice.component';

describe('MailflightinvoiceComponent', () => {
  let component: MailflightinvoiceComponent;
  let fixture: ComponentFixture<MailflightinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailflightinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailflightinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
