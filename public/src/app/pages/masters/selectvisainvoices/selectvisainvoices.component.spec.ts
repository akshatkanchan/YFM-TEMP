import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectvisainvoicesComponent } from './selectvisainvoices.component';

describe('SelectvisainvoicesComponent', () => {
  let component: SelectvisainvoicesComponent;
  let fixture: ComponentFixture<SelectvisainvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectvisainvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectvisainvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
