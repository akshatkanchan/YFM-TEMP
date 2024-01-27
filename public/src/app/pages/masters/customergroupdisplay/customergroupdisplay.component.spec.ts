import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomergroupdisplayComponent } from './customergroupdisplay.component';

describe('CustomergroupdisplayComponent', () => {
  let component: CustomergroupdisplayComponent;
  let fixture: ComponentFixture<CustomergroupdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomergroupdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomergroupdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
