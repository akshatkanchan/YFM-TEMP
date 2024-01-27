import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendbookingComponent } from './extendbooking.component';

describe('ExtendbookingComponent', () => {
  let component: ExtendbookingComponent;
  let fixture: ComponentFixture<ExtendbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
