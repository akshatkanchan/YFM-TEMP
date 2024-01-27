import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportdriverComponent } from './importdriver.component';

describe('ImportdriverComponent', () => {
  let component: ImportdriverComponent;
  let fixture: ComponentFixture<ImportdriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportdriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportdriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
