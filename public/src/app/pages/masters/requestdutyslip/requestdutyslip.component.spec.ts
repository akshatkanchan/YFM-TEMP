import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdutyslipComponent } from './requestdutyslip.component';

describe('RequestdutyslipComponent', () => {
  let component: RequestdutyslipComponent;
  let fixture: ComponentFixture<RequestdutyslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdutyslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdutyslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
