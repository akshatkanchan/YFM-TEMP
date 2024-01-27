import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierdispComponent } from './supplierdisp.component';

describe('SupplierdispComponent', () => {
  let component: SupplierdispComponent;
  let fixture: ComponentFixture<SupplierdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
