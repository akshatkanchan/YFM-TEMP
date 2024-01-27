import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedutyComponent } from './closeduty.component';

describe('ClosedutyComponent', () => {
  let component: ClosedutyComponent;
  let fixture: ComponentFixture<ClosedutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
