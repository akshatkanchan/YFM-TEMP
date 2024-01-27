import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendvisaconfirmationComponent } from './sendvisaconfirmation.component';

describe('SendvisaconfirmationComponent', () => {
  let component: SendvisaconfirmationComponent;
  let fixture: ComponentFixture<SendvisaconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendvisaconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendvisaconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
