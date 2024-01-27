import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendairlineconfirmationComponent } from './sendairlineconfirmation.component';

describe('SendairlineconfirmationComponent', () => {
  let component: SendairlineconfirmationComponent;
  let fixture: ComponentFixture<SendairlineconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendairlineconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendairlineconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
