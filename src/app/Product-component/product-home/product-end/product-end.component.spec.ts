import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEndComponent } from './product-end.component';

describe('ProductEndComponent', () => {
  let component: ProductEndComponent;
  let fixture: ComponentFixture<ProductEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductEndComponent]
    });
    fixture = TestBed.createComponent(ProductEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
