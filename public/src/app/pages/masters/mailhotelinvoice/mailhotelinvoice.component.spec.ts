import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailhotelinvoiceComponent } from './mailhotelinvoice.component';

describe('MailhotelinvoiceComponent', () => {
  let component: MailhotelinvoiceComponent;
  let fixture: ComponentFixture<MailhotelinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailhotelinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailhotelinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
