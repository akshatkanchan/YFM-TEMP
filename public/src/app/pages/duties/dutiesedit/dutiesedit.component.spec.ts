import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutieseditComponent } from './dutiesedit.component';

describe('DutieseditComponent', () => {
  let component: DutieseditComponent;
  let fixture: ComponentFixture<DutieseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutieseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutieseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
