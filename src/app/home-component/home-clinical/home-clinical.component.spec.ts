import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClinicalComponent } from './home-clinical.component';

describe('HomeClinicalComponent', () => {
  let component: HomeClinicalComponent;
  let fixture: ComponentFixture<HomeClinicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeClinicalComponent]
    });
    fixture = TestBed.createComponent(HomeClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
