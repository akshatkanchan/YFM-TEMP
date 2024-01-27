import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSupplierDutyComponent } from './close-supplier-duty.component';

describe('CloseSupplierDutyComponent', () => {
  let component: CloseSupplierDutyComponent;
  let fixture: ComponentFixture<CloseSupplierDutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseSupplierDutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseSupplierDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
