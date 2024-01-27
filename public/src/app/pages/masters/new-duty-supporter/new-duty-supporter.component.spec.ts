import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDutySupporterComponent } from './new-duty-supporter.component';

describe('NewDutySupporterComponent', () => {
  let component: NewDutySupporterComponent;
  let fixture: ComponentFixture<NewDutySupporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDutySupporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDutySupporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
