import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDropdownComponent } from './contact-dropdown.component';

describe('ContactDropdownComponent', () => {
  let component: ContactDropdownComponent;
  let fixture: ComponentFixture<ContactDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDropdownComponent]
    });
    fixture = TestBed.createComponent(ContactDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
