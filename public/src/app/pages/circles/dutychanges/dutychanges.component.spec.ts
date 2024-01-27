import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutychangesComponent } from './dutychanges.component';

describe('DutychangesComponent', () => {
  let component: DutychangesComponent;
  let fixture: ComponentFixture<DutychangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutychangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutychangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
