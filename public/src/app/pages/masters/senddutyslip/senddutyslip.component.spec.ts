import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenddutyslipComponent } from './senddutyslip.component';

describe('SenddutyslipComponent', () => {
  let component: SenddutyslipComponent;
  let fixture: ComponentFixture<SenddutyslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenddutyslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenddutyslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
