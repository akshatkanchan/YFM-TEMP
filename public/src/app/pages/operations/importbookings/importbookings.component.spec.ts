import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportbookingsComponent } from './importbookings.component';

describe('ImportbookingsComponent', () => {
  let component: ImportbookingsComponent;
  let fixture: ComponentFixture<ImportbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
