import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutydispComponent } from './dutydisp.component';

describe('DutydispComponent', () => {
  let component: DutydispComponent;
  let fixture: ComponentFixture<DutydispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutydispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutydispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
