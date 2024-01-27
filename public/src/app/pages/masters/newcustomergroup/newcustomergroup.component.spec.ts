import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomergroupComponent } from './newcustomergroup.component';

describe('NewcustomergroupComponent', () => {
  let component: NewcustomergroupComponent;
  let fixture: ComponentFixture<NewcustomergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
