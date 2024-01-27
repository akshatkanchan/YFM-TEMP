import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookinginvoiceComponent } from './createbookinginvoice.component';

describe('CreatebookinginvoiceComponent', () => {
  let component: CreatebookinginvoiceComponent;
  let fixture: ComponentFixture<CreatebookinginvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebookinginvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookinginvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
