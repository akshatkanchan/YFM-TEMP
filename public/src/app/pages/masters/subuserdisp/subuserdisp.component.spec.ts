import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubuserdispComponent } from './subuserdisp.component';

describe('SubuserdispComponent', () => {
  let component: SubuserdispComponent;
  let fixture: ComponentFixture<SubuserdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubuserdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubuserdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
