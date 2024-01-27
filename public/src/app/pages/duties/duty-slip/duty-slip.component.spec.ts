import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutySlipComponent } from './duty-slip.component';

describe('DutySlipComponent', () => {
  let component: DutySlipComponent;
  let fixture: ComponentFixture<DutySlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutySlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
