import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicledispComponent } from './vehicledisp.component';

describe('VehicledispComponent', () => {
  let component: VehicledispComponent;
  let fixture: ComponentFixture<VehicledispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicledispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicledispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
