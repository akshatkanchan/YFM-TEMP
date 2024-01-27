import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportdutiesComponent } from './exportduties.component';

describe('ExportdutiesComponent', () => {
  let component: ExportdutiesComponent;
  let fixture: ComponentFixture<ExportdutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportdutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportdutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
