import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrequestComponent } from './editrequest.component';

describe('EditrequestComponent', () => {
  let component: EditrequestComponent;
  let fixture: ComponentFixture<EditrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
