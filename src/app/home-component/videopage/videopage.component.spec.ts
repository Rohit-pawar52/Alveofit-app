import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopageComponent } from './videopage.component';

describe('VideopageComponent', () => {
  let component: VideopageComponent;
  let fixture: ComponentFixture<VideopageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideopageComponent]
    });
    fixture = TestBed.createComponent(VideopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
