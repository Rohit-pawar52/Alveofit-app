import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsDropdownComponent } from './solutions-dropdown.component';

describe('SolutionsDropdownComponent', () => {
  let component: SolutionsDropdownComponent;
  let fixture: ComponentFixture<SolutionsDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsDropdownComponent]
    });
    fixture = TestBed.createComponent(SolutionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
