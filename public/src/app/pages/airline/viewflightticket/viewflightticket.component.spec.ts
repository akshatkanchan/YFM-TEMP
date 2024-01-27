import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewflightticketComponent } from './viewflightticket.component';

describe('ViewflightticketComponent', () => {
  let component: ViewflightticketComponent;
  let fixture: ComponentFixture<ViewflightticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewflightticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewflightticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
