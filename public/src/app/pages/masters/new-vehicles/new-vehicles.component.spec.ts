import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehiclesComponent } from './new-vehicles.component';

describe('NewVehiclesComponent', () => {
  let component: NewVehiclesComponent;
  let fixture: ComponentFixture<NewVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
