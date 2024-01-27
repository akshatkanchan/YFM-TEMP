import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailvisainvoiceComponent } from './mailvisainvoice.component';

describe('MailvisainvoiceComponent', () => {
  let component: MailvisainvoiceComponent;
  let fixture: ComponentFixture<MailvisainvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailvisainvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailvisainvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
