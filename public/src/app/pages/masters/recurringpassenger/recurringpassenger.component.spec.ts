import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringpassengerComponent } from './recurringpassenger.component';

describe('RecurringpassengerComponent', () => {
  let component: RecurringpassengerComponent;
  let fixture: ComponentFixture<RecurringpassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringpassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
