import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIndex2Component } from './product-index2.component';

describe('ProductIndex2Component', () => {
  let component: ProductIndex2Component;
  let fixture: ComponentFixture<ProductIndex2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductIndex2Component]
    });
    fixture = TestBed.createComponent(ProductIndex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
