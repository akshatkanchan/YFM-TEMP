import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendinfoComponent } from './sendinfo.component';

describe('SendinfoComponent', () => {
  let component: SendinfoComponent;
  let fixture: ComponentFixture<SendinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
