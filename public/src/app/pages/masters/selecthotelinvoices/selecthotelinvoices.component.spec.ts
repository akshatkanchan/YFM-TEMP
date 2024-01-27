import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecthotelinvoicesComponent } from './selecthotelinvoices.component';

describe('SelecthotelinvoicesComponent', () => {
  let component: SelecthotelinvoicesComponent;
  let fixture: ComponentFixture<SelecthotelinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecthotelinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecthotelinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
