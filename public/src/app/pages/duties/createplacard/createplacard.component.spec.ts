import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateplacardComponent } from './createplacard.component';

describe('CreateplacardComponent', () => {
  let component: CreateplacardComponent;
  let fixture: ComponentFixture<CreateplacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateplacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateplacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
