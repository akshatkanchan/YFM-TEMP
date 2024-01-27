import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecurringbookbyComponent } from './editrecurringbookby.component';

describe('EditrecurringbookbyComponent', () => {
  let component: EditrecurringbookbyComponent;
  let fixture: ComponentFixture<EditrecurringbookbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrecurringbookbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrecurringbookbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
