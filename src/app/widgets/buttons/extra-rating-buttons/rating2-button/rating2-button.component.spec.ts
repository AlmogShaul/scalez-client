import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rating2ButtonComponent } from './rating2-button.component';

describe('Rating2ButtonComponent', () => {
  let component: Rating2ButtonComponent;
  let fixture: ComponentFixture<Rating2ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rating2ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rating2ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
