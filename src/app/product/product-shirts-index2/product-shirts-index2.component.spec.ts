import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShirtsIndex2Component } from './product-shirts-index2.component';

describe('ProductShirtsIndex2Component', () => {
  let component: ProductShirtsIndex2Component;
  let fixture: ComponentFixture<ProductShirtsIndex2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShirtsIndex2Component]
    });
    fixture = TestBed.createComponent(ProductShirtsIndex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
