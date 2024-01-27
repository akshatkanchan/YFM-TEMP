import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsexportComponent } from './bookingsexport.component';

describe('BookingsexportComponent', () => {
  let component: BookingsexportComponent;
  let fixture: ComponentFixture<BookingsexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
