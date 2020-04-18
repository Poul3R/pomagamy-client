import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNoticeComponent } from './search-notice.component';

describe('MainComponent', () => {
  let component: SearchNoticeComponent;
  let fixture: ComponentFixture<SearchNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
