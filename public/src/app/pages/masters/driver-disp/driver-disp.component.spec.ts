import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDispComponent } from './driver-disp.component';

describe('DriverDispComponent', () => {
  let component: DriverDispComponent;
  let fixture: ComponentFixture<DriverDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
