import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenddutytosuppliersComponent } from './senddutytosuppliers.component';

describe('SenddutytosuppliersComponent', () => {
  let component: SenddutytosuppliersComponent;
  let fixture: ComponentFixture<SenddutytosuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenddutytosuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenddutytosuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
