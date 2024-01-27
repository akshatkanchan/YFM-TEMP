import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremovelabelsComponent } from './addremovelabels.component';

describe('AddremovelabelsComponent', () => {
  let component: AddremovelabelsComponent;
  let fixture: ComponentFixture<AddremovelabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddremovelabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremovelabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
