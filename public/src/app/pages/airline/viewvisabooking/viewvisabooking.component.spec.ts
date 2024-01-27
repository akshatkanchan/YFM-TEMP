import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvisabookingComponent } from './viewvisabooking.component';

describe('ViewvisabookingComponent', () => {
  let component: ViewvisabookingComponent;
  let fixture: ComponentFixture<ViewvisabookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvisabookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvisabookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
