import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookairlineComponent } from './bookairline.component';

describe('BookairlineComponent', () => {
  let component: BookairlineComponent;
  let fixture: ComponentFixture<BookairlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookairlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
