import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehotelinvoiceComponent } from './createhotelinvoice.component';

describe('CreatehotelinvoiceComponent', () => {
  let component: CreatehotelinvoiceComponent;
  let fixture: ComponentFixture<CreatehotelinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatehotelinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehotelinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
