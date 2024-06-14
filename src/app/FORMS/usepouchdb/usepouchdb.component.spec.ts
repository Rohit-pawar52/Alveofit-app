import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsepouchdbComponent } from './usepouchdb.component';

describe('UsepouchdbComponent', () => {
  let component: UsepouchdbComponent;
  let fixture: ComponentFixture<UsepouchdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsepouchdbComponent]
    });
    fixture = TestBed.createComponent(UsepouchdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
