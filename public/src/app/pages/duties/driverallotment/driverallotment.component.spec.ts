import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverallotmentComponent } from './driverallotment.component';

describe('DriverallotmentComponent', () => {
  let component: DriverallotmentComponent;
  let fixture: ComponentFixture<DriverallotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverallotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverallotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
