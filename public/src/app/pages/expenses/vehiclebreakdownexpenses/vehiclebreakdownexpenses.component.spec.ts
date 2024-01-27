import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclebreakdownexpensesComponent } from './vehiclebreakdownexpenses.component';

describe('VehiclebreakdownexpensesComponent', () => {
  let component: VehiclebreakdownexpensesComponent;
  let fixture: ComponentFixture<VehiclebreakdownexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclebreakdownexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclebreakdownexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
