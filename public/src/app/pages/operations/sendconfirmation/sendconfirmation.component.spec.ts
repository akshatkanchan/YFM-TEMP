import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendconfirmationComponent } from './sendconfirmation.component';

describe('SendconfirmationComponent', () => {
  let component: SendconfirmationComponent;
  let fixture: ComponentFixture<SendconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
