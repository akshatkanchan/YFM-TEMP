import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhotelsComponent } from './addhotels.component';

describe('AddhotelsComponent', () => {
  let component: AddhotelsComponent;
  let fixture: ComponentFixture<AddhotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});