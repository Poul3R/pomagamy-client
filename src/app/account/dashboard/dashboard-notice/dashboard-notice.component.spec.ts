import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNoticeComponent } from './dashboard-notice.component';

describe('DashboardNoticeComponent', () => {
  let component: DashboardNoticeComponent;
  let fixture: ComponentFixture<DashboardNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
