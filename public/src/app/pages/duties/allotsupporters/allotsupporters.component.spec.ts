import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotsupportersComponent } from './allotsupporters.component';

describe('AllotsupportersComponent', () => {
  let component: AllotsupportersComponent;
  let fixture: ComponentFixture<AllotsupportersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotsupportersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotsupportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
