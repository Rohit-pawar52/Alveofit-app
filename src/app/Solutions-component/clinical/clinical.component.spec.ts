import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalComponent } from './clinical.component';

describe('ClinicalComponent', () => {
  let component: ClinicalComponent;
  let fixture: ComponentFixture<ClinicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicalComponent]
    });
    fixture = TestBed.createComponent(ClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
