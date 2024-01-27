import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateConfirmComponent } from './date-confirm.component';

describe('DateConfirmComponent', () => {
  let component: DateConfirmComponent;
  let fixture: ComponentFixture<DateConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
