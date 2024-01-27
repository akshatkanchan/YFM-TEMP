import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisadispinvoiceComponent } from './visadispinvoice.component';

describe('VisadispinvoiceComponent', () => {
  let component: VisadispinvoiceComponent;
  let fixture: ComponentFixture<VisadispinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisadispinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisadispinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
