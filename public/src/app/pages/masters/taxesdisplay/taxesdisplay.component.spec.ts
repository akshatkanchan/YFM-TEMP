import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesdisplayComponent } from './taxesdisplay.component';

describe('TaxesdisplayComponent', () => {
  let component: TaxesdisplayComponent;
  let fixture: ComponentFixture<TaxesdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxesdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
