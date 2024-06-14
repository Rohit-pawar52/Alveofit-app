import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlveoairClinicComponent } from './alveoair-clinic.component';

describe('AlveoairClinicComponent', () => {
  let component: AlveoairClinicComponent;
  let fixture: ComponentFixture<AlveoairClinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlveoairClinicComponent]
    });
    fixture = TestBed.createComponent(AlveoairClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
