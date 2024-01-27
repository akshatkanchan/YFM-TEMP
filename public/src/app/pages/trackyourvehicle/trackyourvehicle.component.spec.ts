import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackyourvehicleComponent } from './trackyourvehicle.component';

describe('TrackyourvehicleComponent', () => {
  let component: TrackyourvehicleComponent;
  let fixture: ComponentFixture<TrackyourvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackyourvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackyourvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
