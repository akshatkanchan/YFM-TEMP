import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpurchaseinvoicesComponent } from './selectpurchaseinvoices.component';

describe('SelectpurchaseinvoicesComponent', () => {
  let component: SelectpurchaseinvoicesComponent;
  let fixture: ComponentFixture<SelectpurchaseinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectpurchaseinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpurchaseinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
