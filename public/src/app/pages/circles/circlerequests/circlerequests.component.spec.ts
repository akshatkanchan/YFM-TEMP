import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclerequestsComponent } from './circlerequests.component';

describe('CirclerequestsComponent', () => {
  let component: CirclerequestsComponent;
  let fixture: ComponentFixture<CirclerequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclerequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclerequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
