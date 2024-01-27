import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinedispComponent } from './airlinedisp.component';

describe('AirlinedispComponent', () => {
  let component: AirlinedispComponent;
  let fixture: ComponentFixture<AirlinedispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinedispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinedispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
