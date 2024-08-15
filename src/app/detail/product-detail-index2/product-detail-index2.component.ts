import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductShirtIndex2Service } from 'src/app/server/product-shirt-index2.service';

@Component({
  selector: 'app-product-detail-index2',
  templateUrl: './product-detail-index2.component.html',
  styleUrls: ['./product-detail-index2.component.scss']
})
export class ProductDetailIndex2Component implements OnInit {

  product2: any;

  constructor(private route: ActivatedRoute, private ProductShirtIndex2Service: ProductShirtIndex2Service) { }

  ngOnInit() {
    const product2Name = this.route.snapshot.paramMap.get('name');
    if (product2Name) {
      this.product2 = this.ProductShirtIndex2Service.getProduct2ByName(product2Name);
    } else {
      // Handle case when productName is null
      console.error('Product name is null');
    }
  }
}
