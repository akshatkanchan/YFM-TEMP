import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvehiclemaintenanceexpensesComponent } from './addvehiclemaintenanceexpenses.component';

describe('AddvehiclemaintenanceexpensesComponent', () => {
  let component: AddvehiclemaintenanceexpensesComponent;
  let fixture: ComponentFixture<AddvehiclemaintenanceexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvehiclemaintenanceexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvehiclemaintenanceexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
