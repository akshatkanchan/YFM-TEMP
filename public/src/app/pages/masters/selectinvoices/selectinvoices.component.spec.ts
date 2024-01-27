import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectinvoicesComponent } from './selectinvoices.component';

describe('SelectinvoicesComponent', () => {
  let component: SelectinvoicesComponent;
  let fixture: ComponentFixture<SelectinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
