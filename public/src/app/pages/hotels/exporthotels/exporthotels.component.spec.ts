import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporthotelsComponent } from './exporthotels.component';

describe('ExporthotelsComponent', () => {
  let component: ExporthotelsComponent;
  let fixture: ComponentFixture<ExporthotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporthotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporthotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
