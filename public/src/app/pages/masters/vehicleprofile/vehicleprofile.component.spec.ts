import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleprofileComponent } from './vehicleprofile.component';

describe('VehicleprofileComponent', () => {
  let component: VehicleprofileComponent;
  let fixture: ComponentFixture<VehicleprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
