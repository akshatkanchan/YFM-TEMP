import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhotelinvoiceComponent } from './viewhotelinvoice.component';

describe('ViewhotelinvoiceComponent', () => {
  let component: ViewhotelinvoiceComponent;
  let fixture: ComponentFixture<ViewhotelinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhotelinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhotelinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
