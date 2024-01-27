import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutytypedispComponent } from './dutytypedisp.component';

describe('DutytypedispComponent', () => {
  let component: DutytypedispComponent;
  let fixture: ComponentFixture<DutytypedispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutytypedispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutytypedispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
