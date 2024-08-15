import { TestBed } from '@angular/core/testing';

import { ProductShirtIndexService } from './product-shirt-index.service';

describe('ProductShirtIndexService', () => {
  let service: ProductShirtIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductShirtIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
