import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvehiclebreakdownexpensesComponent } from './addvehiclebreakdownexpenses.component';

describe('AddvehiclebreakdownexpensesComponent', () => {
  let component: AddvehiclebreakdownexpensesComponent;
  let fixture: ComponentFixture<AddvehiclebreakdownexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvehiclebreakdownexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvehiclebreakdownexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
