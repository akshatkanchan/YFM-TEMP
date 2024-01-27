import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclesdisplayComponent } from './circlesdisplay.component';

describe('CirclesdisplayComponent', () => {
  let component: CirclesdisplayComponent;
  let fixture: ComponentFixture<CirclesdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclesdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclesdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
