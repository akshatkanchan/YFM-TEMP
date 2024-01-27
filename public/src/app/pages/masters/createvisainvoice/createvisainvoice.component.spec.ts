import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevisainvoiceComponent } from './createvisainvoice.component';

describe('CreatevisainvoiceComponent', () => {
  let component: CreatevisainvoiceComponent;
  let fixture: ComponentFixture<CreatevisainvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatevisainvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevisainvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
