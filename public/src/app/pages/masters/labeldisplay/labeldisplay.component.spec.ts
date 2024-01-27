import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeldisplayComponent } from './labeldisplay.component';

describe('LabeldisplayComponent', () => {
  let component: LabeldisplayComponent;
  let fixture: ComponentFixture<LabeldisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeldisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
