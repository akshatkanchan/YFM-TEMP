import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbookingsinvoiceComponent } from './hotelbookingsinvoice.component';

describe('HotelbookingsinvoiceComponent', () => {
  let component: HotelbookingsinvoiceComponent;
  let fixture: ComponentFixture<HotelbookingsinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelbookingsinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelbookingsinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
