import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedBoxComponent } from './finished-box.component';

describe('FinishedBoxComponent', () => {
  let component: FinishedBoxComponent;
  let fixture: ComponentFixture<FinishedBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
