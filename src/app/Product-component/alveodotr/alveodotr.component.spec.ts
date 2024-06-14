import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlveodotrComponent } from './alveodotr.component';

describe('AlveodotrComponent', () => {
  let component: AlveodotrComponent;
  let fixture: ComponentFixture<AlveodotrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlveodotrComponent]
    });
    fixture = TestBed.createComponent(AlveodotrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
