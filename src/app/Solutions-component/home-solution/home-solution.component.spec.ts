import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSolutionComponent } from './home-solution.component';

describe('HomeSolutionComponent', () => {
  let component: HomeSolutionComponent;
  let fixture: ComponentFixture<HomeSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSolutionComponent]
    });
    fixture = TestBed.createComponent(HomeSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
