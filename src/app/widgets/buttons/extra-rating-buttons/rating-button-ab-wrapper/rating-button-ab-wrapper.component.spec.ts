import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingButtonABWrapperComponent } from './rating-button-ab-wrapper.component';

describe('RatingButtonABWrapperComponent', () => {
  let component: RatingButtonABWrapperComponent;
  let fixture: ComponentFixture<RatingButtonABWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingButtonABWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingButtonABWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
