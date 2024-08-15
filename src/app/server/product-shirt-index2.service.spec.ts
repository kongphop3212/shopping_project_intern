import { TestBed } from '@angular/core/testing';

import { ProductShirtIndex2Service } from './product-shirt-index2.service';

describe('Product2Service', () => {
  let service: ProductShirtIndex2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductShirtIndex2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
