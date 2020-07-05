import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingExperienceComponent } from './rating-experience.component';

describe('RatingExperienceComponent', () => {
  let component: RatingExperienceComponent;
  let fixture: ComponentFixture<RatingExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
