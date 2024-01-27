import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclegroupdispComponent } from './vehiclegroupdisp.component';

describe('VehiclegroupdispComponent', () => {
  let component: VehiclegroupdispComponent;
  let fixture: ComponentFixture<VehiclegroupdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclegroupdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclegroupdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
