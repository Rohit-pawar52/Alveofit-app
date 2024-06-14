import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlveoPatientComponent } from './alveo-patient.component';

describe('AlveoPatientComponent', () => {
  let component: AlveoPatientComponent;
  let fixture: ComponentFixture<AlveoPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlveoPatientComponent]
    });
    fixture = TestBed.createComponent(AlveoPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
