import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailinvoiceComponent } from './mailinvoice.component';

describe('MailinvoiceComponent', () => {
  let component: MailinvoiceComponent;
  let fixture: ComponentFixture<MailinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
