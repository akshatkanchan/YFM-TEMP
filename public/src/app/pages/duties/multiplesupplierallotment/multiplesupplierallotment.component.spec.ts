import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesupplierallotmentComponent } from './multiplesupplierallotment.component';

describe('MultiplesupplierallotmentComponent', () => {
  let component: MultiplesupplierallotmentComponent;
  let fixture: ComponentFixture<MultiplesupplierallotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplesupplierallotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplesupplierallotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
