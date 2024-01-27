import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsuppliergroupComponent } from './newsuppliergroup.component';

describe('NewsuppliergroupComponent', () => {
  let component: NewsuppliergroupComponent;
  let fixture: ComponentFixture<NewsuppliergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsuppliergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsuppliergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
