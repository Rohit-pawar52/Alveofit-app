import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexpageComponent } from './flexpage.component';

describe('FlexpageComponent', () => {
  let component: FlexpageComponent;
  let fixture: ComponentFixture<FlexpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexpageComponent]
    });
    fixture = TestBed.createComponent(FlexpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
