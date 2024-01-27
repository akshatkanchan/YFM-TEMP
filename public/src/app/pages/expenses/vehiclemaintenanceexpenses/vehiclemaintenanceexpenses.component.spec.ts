import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclemaintenanceexpensesComponent } from './vehiclemaintenanceexpenses.component';

describe('VehiclemaintenanceexpensesComponent', () => {
  let component: VehiclemaintenanceexpensesComponent;
  let fixture: ComponentFixture<VehiclemaintenanceexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclemaintenanceexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclemaintenanceexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
