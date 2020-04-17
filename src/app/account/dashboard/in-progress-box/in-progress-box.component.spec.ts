import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressBoxComponent } from './in-progress-box.component';

describe('InProgressBoxComponent', () => {
  let component: InProgressBoxComponent;
  let fixture: ComponentFixture<InProgressBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
