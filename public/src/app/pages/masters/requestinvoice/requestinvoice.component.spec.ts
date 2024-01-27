import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestinvoiceComponent } from './requestinvoice.component';

describe('RequestinvoiceComponent', () => {
  let component: RequestinvoiceComponent;
  let fixture: ComponentFixture<RequestinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
