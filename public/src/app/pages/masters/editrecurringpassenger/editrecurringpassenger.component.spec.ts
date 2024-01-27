import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecurringpassengerComponent } from './editrecurringpassenger.component';

describe('EditrecurringpassengerComponent', () => {
  let component: EditrecurringpassengerComponent;
  let fixture: ComponentFixture<EditrecurringpassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrecurringpassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrecurringpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
