import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateflightinvoiceComponent } from './createflightinvoice.component';

describe('CreateflightinvoiceComponent', () => {
  let component: CreateflightinvoiceComponent;
  let fixture: ComponentFixture<CreateflightinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateflightinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateflightinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
