import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverprofileComponent } from './driverprofile.component';

describe('DriverprofileComponent', () => {
  let component: DriverprofileComponent;
  let fixture: ComponentFixture<DriverprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
