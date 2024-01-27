import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountDisplayComponent } from './bank-account-display.component';

describe('BankAccountDisplayComponent', () => {
  let component: BankAccountDisplayComponent;
  let fixture: ComponentFixture<BankAccountDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
