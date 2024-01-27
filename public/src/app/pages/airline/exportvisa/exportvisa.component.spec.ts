import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportvisaComponent } from './exportvisa.component';

describe('ExportvisaComponent', () => {
  let component: ExportvisaComponent;
  let fixture: ComponentFixture<ExportvisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportvisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
