import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomerinbookingComponent } from './addcustomerinbooking.component';

describe('AddcustomerinbookingComponent', () => {
  let component: AddcustomerinbookingComponent;
  let fixture: ComponentFixture<AddcustomerinbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustomerinbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerinbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
