import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewflightinvoiceComponent } from './viewflightinvoice.component';

describe('ViewflightinvoiceComponent', () => {
  let component: ViewflightinvoiceComponent;
  let fixture: ComponentFixture<ViewflightinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewflightinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewflightinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
