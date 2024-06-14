import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleComponent } from './tele.component';

describe('TeleComponent', () => {
  let component: TeleComponent;
  let fixture: ComponentFixture<TeleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeleComponent]
    });
    fixture = TestBed.createComponent(TeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
