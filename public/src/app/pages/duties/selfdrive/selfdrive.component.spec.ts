import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfdriveComponent } from './selfdrive.component';

describe('SelfdriveComponent', () => {
  let component: SelfdriveComponent;
  let fixture: ComponentFixture<SelfdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
