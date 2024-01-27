import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlogsComponent } from './contactlogs.component';

describe('ContactlogsComponent', () => {
  let component: ContactlogsComponent;
  let fixture: ComponentFixture<ContactlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
