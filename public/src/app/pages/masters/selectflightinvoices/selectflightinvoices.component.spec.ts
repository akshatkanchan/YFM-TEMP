import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectflightinvoicesComponent } from './selectflightinvoices.component';

describe('SelectflightinvoicesComponent', () => {
  let component: SelectflightinvoicesComponent;
  let fixture: ComponentFixture<SelectflightinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectflightinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectflightinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
