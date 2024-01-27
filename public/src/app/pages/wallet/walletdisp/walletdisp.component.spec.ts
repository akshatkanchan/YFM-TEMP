import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletdispComponent } from './walletdisp.component';

describe('WalletdispComponent', () => {
  let component: WalletdispComponent;
  let fixture: ComponentFixture<WalletdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
