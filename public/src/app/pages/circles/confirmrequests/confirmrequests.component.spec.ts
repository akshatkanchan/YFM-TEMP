import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmrequestsComponent } from './confirmrequests.component';

describe('ConfirmrequestsComponent', () => {
  let component: ConfirmrequestsComponent;
  let fixture: ComponentFixture<ConfirmrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
