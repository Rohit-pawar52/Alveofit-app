import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlveoProviderComponent } from './alveo-provider.component';

describe('AlveoProviderComponent', () => {
  let component: AlveoProviderComponent;
  let fixture: ComponentFixture<AlveoProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlveoProviderComponent]
    });
    fixture = TestBed.createComponent(AlveoProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
