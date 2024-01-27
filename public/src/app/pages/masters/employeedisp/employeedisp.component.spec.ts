import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedispComponent } from './employeedisp.component';

describe('EmployeedispComponent', () => {
  let component: EmployeedispComponent;
  let fixture: ComponentFixture<EmployeedispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
