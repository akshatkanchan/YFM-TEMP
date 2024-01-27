import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingfilesComponent } from './bookingfiles.component';

describe('BookingfilesComponent', () => {
  let component: BookingfilesComponent;
  let fixture: ComponentFixture<BookingfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
