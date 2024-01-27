import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofficeexpensesComponent } from './addofficeexpenses.component';

describe('AddofficeexpensesComponent', () => {
  let component: AddofficeexpensesComponent;
  let fixture: ComponentFixture<AddofficeexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddofficeexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddofficeexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
