import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendhotelconfirmationComponent } from './sendhotelconfirmation.component';

describe('SendhotelconfirmationComponent', () => {
  let component: SendhotelconfirmationComponent;
  let fixture: ComponentFixture<SendhotelconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendhotelconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendhotelconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
