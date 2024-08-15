// product-detail-index.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductShirtIndexService } from '../../server/product-shirt-index.service';
import { Product } from 'src/app/product/product.model';

@Component({
 selector: 'app-product-detail-index',
 templateUrl: './product-detail-index.component.html',
 styleUrls: ['./product-detail-index.component.scss']
})
export class ProductDetailIndexComponent implements OnInit {
 product: Product | undefined;

 constructor(
  private route: ActivatedRoute,
  private productShirtIndexService: ProductShirtIndexService
 ) {}

 ngOnInit(): void {
  this.getProduct();
 }

 getProduct(): void {
  const productId = this.route.snapshot.paramMap.get('id');
  if (productId) {
    this.productShirtIndexService.getProductById(productId)
      .subscribe(
        product => {
          this.product = product;
        },
        error => {
          console.error('Error fetching product:', error);
        }
      );
  }
 }
}
