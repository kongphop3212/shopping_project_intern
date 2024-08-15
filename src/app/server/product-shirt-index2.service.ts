import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductShirtIndex2Service {

  products2 = [
    {
      name: 'VANS CAMP COLLAR WOVEN',
      color: 'Color: Black',
      price: 120,
      image: "/assets/product/VANS_CAMP.png"
    },
    {
      name: 'PLEASURES 7 WONDER CAMP',
      color: 'Color: Black',
      price: 120,
      image: '/assets/product/PLEASURES_7.png'
    },
    {
      name: 'SSAP Granny',
      color: 'Color: Pink',
      price: 60,
      image: '/assets/product/SSAP_Granny_PINK.png'
    },
    {
      name: 'SSAP Granny',
      color: 'Color: Black',
      price: 60,
      image: '/assets/product/SSAP_Granny_BLACK.png'
    },
    {
      name: 'PYC Eight Ball',
      color: 'Color: Black',
      price: 120,
      image: '/assets/product/PYC_Eight_Ball.png'
    },
    {
      name: 'SSAPxJAMESON Halo',
      color: 'Color: Jameson',
      price: 70,
      image: '/assets/product/SSAPxJAMESON_Halo.png'
    },
    {
      name: 'TNT Otter Tee',
      color: 'Color: White',
      price: 60,
      image: '/assets/product/TNT_Otter_Tee.png'
    },
    {
      name: 'PLEASURES LOGIC',
      color: 'Color: Black',
      price: 70,
      image: '/assets/product/PLEASURES_LOGIC.png'
    },
    {
      name: 'PUMAxPLEASURES Graphic',
      color: 'Color: Black',
      price: 60,
      image: '/assets/product/PUMAxPLEASURES_Graphic_Black.png'
    },
    {
      name: 'PUMAxPLEASURES Graphic',
      color: 'Color: White',
      price: 60,
      image: '/assets/product/PUMAxPLEASURES_Graphic_White.png'
    },
    {
      name: 'PUMAxPLEASURES Graphic',
      color: 'Color: Stormy Slate',
      price: 60,
      image: '/assets/product/PUMAxPLEASURES_Graphic_Stormy_Slate.png'
    },
    {
      name: 'PLEASURES HEEL',
      color: 'Color: Black',
      price: 70,
      image: '/assets/product/PLEASURES_HEEL.png'
    },
    {
      name: 'PLEASURES CRUMBLE',
      color: 'Color: Black',
      price: 74,
      image: '/assets/product/PLEASURES_CRUMBLE.png'
    },
    {
      name: 'PYC BEAR DRAGON BOAT',
      color: 'Color: Black',
      price: 70,
      image: '/assets/product/PYC_BEAR_DRAGON_BOAT.png'
    },
    {
      name: 'PYC BEAR TENNIS CLUB',
      color: 'Color: Black',
      price: 75,
      image: '/assets/product/PYC_BEAR_TENNIS_CLUB.png'
    }
    // Add more products as needed
  ];
  constructor() { }

  getAllProducts2() {
    return this.products2;
  }

  getProduct2ByName(name: string) {
    return this.products2.find(product2 => product2.name === name);
  }
}
