import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductShirtIndexService } from 'src/app/server/product-shirt-index.service';


@Component({
  selector: 'app-product-shirts-index',
  templateUrl: './product-shirts-index.component.html',
  styleUrls: ['./product-shirts-index.component.scss']
})

export class ProductShirtsIndexComponent implements OnInit {
  product: Product[] = [];
  error: string | null = null; // เพิ่มตัวแปรเก็บข้อผิดพลาด

  constructor(private productShirtIndexService: ProductShirtIndexService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.productShirtIndexService.getProduct()
    .subscribe(
      product => {
        this.product = product; // ใช้ this.product ซึ่งมันเป็นตัวแปรที่ประกาศไว้ข้างบนแล้ว
        this.error = null; // รีเซ็ตข้อผิดพลาดเมื่อสำเร็จ
      },
      error => {
        this.error = 'An error occurred while fetching products: ' + error; // ตั้งค่าข้อผิดพลาด
      }
    );
  }
}
