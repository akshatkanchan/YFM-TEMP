import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedriverpasswordComponent } from './changedriverpassword.component';

describe('ChangedriverpasswordComponent', () => {
  let component: ChangedriverpasswordComponent;
  let fixture: ComponentFixture<ChangedriverpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedriverpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedriverpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
