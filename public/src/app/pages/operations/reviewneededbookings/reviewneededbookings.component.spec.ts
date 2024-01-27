import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewneededbookingsComponent } from './reviewneededbookings.component';

describe('ReviewneededbookingsComponent', () => {
  let component: ReviewneededbookingsComponent;
  let fixture: ComponentFixture<ReviewneededbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewneededbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewneededbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
