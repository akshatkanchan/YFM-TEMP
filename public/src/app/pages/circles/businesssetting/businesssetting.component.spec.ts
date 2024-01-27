import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesssettingComponent } from './businesssetting.component';

describe('BusinesssettingComponent', () => {
  let component: BusinesssettingComponent;
  let fixture: ComponentFixture<BusinesssettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesssettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesssettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
