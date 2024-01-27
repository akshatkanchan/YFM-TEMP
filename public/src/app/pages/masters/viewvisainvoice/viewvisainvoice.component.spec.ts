import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvisainvoiceComponent } from './viewvisainvoice.component';

describe('ViewvisainvoiceComponent', () => {
  let component: ViewvisainvoiceComponent;
  let fixture: ComponentFixture<ViewvisainvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvisainvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvisainvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
