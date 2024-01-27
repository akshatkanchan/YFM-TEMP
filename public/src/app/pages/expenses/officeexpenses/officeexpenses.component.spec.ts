import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeexpensesComponent } from './officeexpenses.component';

describe('OfficeexpensesComponent', () => {
  let component: OfficeexpensesComponent;
  let fixture: ComponentFixture<OfficeexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
