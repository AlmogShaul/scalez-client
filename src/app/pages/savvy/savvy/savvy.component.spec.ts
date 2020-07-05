import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavvyComponent } from './savvy.component';

describe('SavvyComponent', () => {
  let component: SavvyComponent;
  let fixture: ComponentFixture<SavvyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavvyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
