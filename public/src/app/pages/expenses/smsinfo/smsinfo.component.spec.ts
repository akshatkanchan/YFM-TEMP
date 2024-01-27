import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsinfoComponent } from './smsinfo.component';

describe('SmsinfoComponent', () => {
  let component: SmsinfoComponent;
  let fixture: ComponentFixture<SmsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
