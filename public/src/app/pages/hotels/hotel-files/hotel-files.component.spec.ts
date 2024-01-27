import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFilesComponent } from './hotel-files.component';

describe('HotelFilesComponent', () => {
  let component: HotelFilesComponent;
  let fixture: ComponentFixture<HotelFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
