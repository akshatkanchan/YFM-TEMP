import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhotelbookingsComponent } from './displayhotelbookings.component';

describe('DisplayhotelbookingsComponent', () => {
  let component: DisplayhotelbookingsComponent;
  let fixture: ComponentFixture<DisplayhotelbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayhotelbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayhotelbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
