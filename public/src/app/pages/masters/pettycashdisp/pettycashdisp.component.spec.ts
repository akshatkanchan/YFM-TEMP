import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettycashdispComponent } from './pettycashdisp.component';

describe('PettycashdispComponent', () => {
  let component: PettycashdispComponent;
  let fixture: ComponentFixture<PettycashdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettycashdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettycashdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
