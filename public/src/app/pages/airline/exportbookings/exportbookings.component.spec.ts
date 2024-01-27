import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportbookingsComponent } from './exportbookings.component';

describe('ExportbookingsComponent', () => {
  let component: ExportbookingsComponent;
  let fixture: ComponentFixture<ExportbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
