import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDutiesComponent } from './purchase-duties.component';

describe('PurchaseDutiesComponent', () => {
  let component: PurchaseDutiesComponent;
  let fixture: ComponentFixture<PurchaseDutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseDutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
