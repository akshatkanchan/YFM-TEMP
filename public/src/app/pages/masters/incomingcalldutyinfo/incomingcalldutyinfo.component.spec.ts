import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingcalldutyinfoComponent } from './incomingcalldutyinfo.component';

describe('IncomingcalldutyinfoComponent', () => {
  let component: IncomingcalldutyinfoComponent;
  let fixture: ComponentFixture<IncomingcalldutyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingcalldutyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingcalldutyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
