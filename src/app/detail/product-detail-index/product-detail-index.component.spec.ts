import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailIndexComponent } from './product-detail-index.component';

describe('ProductDetailIndexComponent', () => {
  let component: ProductDetailIndexComponent;
  let fixture: ComponentFixture<ProductDetailIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailIndexComponent]
    });
    fixture = TestBed.createComponent(ProductDetailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
