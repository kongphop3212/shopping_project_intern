import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShirtsIndexComponent } from './product-shirts-index.component';

describe('ProductShirtsIndexComponent', () => {
  let component: ProductShirtsIndexComponent;
  let fixture: ComponentFixture<ProductShirtsIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShirtsIndexComponent]
    });
    fixture = TestBed.createComponent(ProductShirtsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
