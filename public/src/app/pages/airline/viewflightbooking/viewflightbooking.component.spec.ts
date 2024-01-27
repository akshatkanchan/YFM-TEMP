import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewflightbookingComponent } from './viewflightbooking.component';

describe('ViewflightbookingComponent', () => {
  let component: ViewflightbookingComponent;
  let fixture: ComponentFixture<ViewflightbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewflightbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewflightbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
