import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlveoairHomeComponent } from './alveoair-home.component';

describe('AlveoairHomeComponent', () => {
  let component: AlveoairHomeComponent;
  let fixture: ComponentFixture<AlveoairHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlveoairHomeComponent]
    });
    fixture = TestBed.createComponent(AlveoairHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
