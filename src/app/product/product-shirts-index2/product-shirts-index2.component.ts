import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductShirtIndex2Service } from 'src/app/server/product-shirt-index2.service';



@Component({
  selector: 'app-product-shirts-index2',
  templateUrl: './product-shirts-index2.component.html',
  styleUrls: ['./product-shirts-index2.component.scss']
})
export class ProductShirtsIndex2Component implements OnInit {

  products2: any[] | undefined;

  constructor(private ProductShirtIndex2Service: ProductShirtIndex2Service, private router: Router) { }

  ngOnInit() {
    this.products2 = this.ProductShirtIndex2Service.getAllProducts2();
  }

  goToProduct2Detail(product2Name: string) {
    this.router.navigate(['/product-detail-index2', product2Name]);
  }
}
