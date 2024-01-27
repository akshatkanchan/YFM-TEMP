import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringbookbyComponent } from './recurringbookby.component';

describe('RecurringbookbyComponent', () => {
  let component: RecurringbookbyComponent;
  let fixture: ComponentFixture<RecurringbookbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringbookbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringbookbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
