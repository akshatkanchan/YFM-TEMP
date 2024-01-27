import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchdisplayComponent } from './branchdisplay.component';

describe('BranchdisplayComponent', () => {
  let component: BranchdisplayComponent;
  let fixture: ComponentFixture<BranchdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
