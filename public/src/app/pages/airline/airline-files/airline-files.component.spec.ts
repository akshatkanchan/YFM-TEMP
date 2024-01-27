import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineFilesComponent } from './airline-files.component';

describe('AirlineFilesComponent', () => {
  let component: AirlineFilesComponent;
  let fixture: ComponentFixture<AirlineFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
