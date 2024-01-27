import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpurchasepaymentComponent } from './newpurchasepayment.component';

describe('NewpurchasepaymentComponent', () => {
  let component: NewpurchasepaymentComponent;
  let fixture: ComponentFixture<NewpurchasepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpurchasepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpurchasepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
