import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailIndex2Component } from './product-detail-index2.component';

describe('ProductDetailIndex2Component', () => {
  let component: ProductDetailIndex2Component;
  let fixture: ComponentFixture<ProductDetailIndex2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailIndex2Component]
    });
    fixture = TestBed.createComponent(ProductDetailIndex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
