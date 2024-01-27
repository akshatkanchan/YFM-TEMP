import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersdispComponent } from './suppliersdisp.component';

describe('SuppliersdispComponent', () => {
  let component: SuppliersdispComponent;
  let fixture: ComponentFixture<SuppliersdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
