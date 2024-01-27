import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpettycashComponent } from './newpettycash.component';

describe('NewpettycashComponent', () => {
  let component: NewpettycashComponent;
  let fixture: ComponentFixture<NewpettycashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpettycashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpettycashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
