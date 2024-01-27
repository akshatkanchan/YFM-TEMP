import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhotelbookingComponent } from './viewhotelbooking.component';

describe('ViewhotelbookingComponent', () => {
  let component: ViewhotelbookingComponent;
  let fixture: ComponentFixture<ViewhotelbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhotelbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhotelbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
