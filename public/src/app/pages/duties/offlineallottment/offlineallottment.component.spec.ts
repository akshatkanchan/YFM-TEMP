import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineallottmentComponent } from './offlineallottment.component';

describe('OfflineallottmentComponent', () => {
  let component: OfflineallottmentComponent;
  let fixture: ComponentFixture<OfflineallottmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineallottmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineallottmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
