import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesdispComponent } from './dutiesdisp.component';

describe('DutiesdispComponent', () => {
  let component: DutiesdispComponent;
  let fixture: ComponentFixture<DutiesdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutiesdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutiesdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
