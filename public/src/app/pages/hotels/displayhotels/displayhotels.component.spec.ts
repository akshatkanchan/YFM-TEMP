import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhotelsComponent } from './displayhotels.component';

describe('DisplayhotelsComponent', () => {
  let component: DisplayhotelsComponent;
  let fixture: ComponentFixture<DisplayhotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayhotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
