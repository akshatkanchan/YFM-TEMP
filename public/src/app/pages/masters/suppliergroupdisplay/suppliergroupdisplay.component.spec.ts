import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliergroupdisplayComponent } from './suppliergroupdisplay.component';

describe('SuppliergroupdisplayComponent', () => {
  let component: SuppliergroupdisplayComponent;
  let fixture: ComponentFixture<SuppliergroupdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliergroupdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliergroupdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
