import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinganddutydisplayComponent } from './bookinganddutydisplay.component';

describe('BookinganddutydisplayComponent', () => {
  let component: BookinganddutydisplayComponent;
  let fixture: ComponentFixture<BookinganddutydisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinganddutydisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinganddutydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
