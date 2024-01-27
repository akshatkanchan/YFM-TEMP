import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfuelComponent } from './addfuel.component';

describe('AddfuelComponent', () => {
  let component: AddfuelComponent;
  let fixture: ComponentFixture<AddfuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
