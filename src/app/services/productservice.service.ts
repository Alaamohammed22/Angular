import { Injectable } from '@angular/core';
import { ProductsComponent } from '../component/products/products.component';
import { Iproduct } from '../Shared Classes and Types/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  ProductList: Iproduct[] = [
    {
      Id: 1,
      Name: 'pants',
      Price: 150,
      Quantity: 50,
      imageUrl: '../assets/pants.jpg',
    },
    {
      Id: 2,
      Name: 'sweetshirt',
      Price: 180,
      Quantity: 80,
      imageUrl: '../assets/sweetshirt.jpg',
    },
    {
      Id: 3,
      Name: 'skirt',
      Price: 280,
      Quantity: 100,
      imageUrl: '../assets/skirt.jpg',
    },
  ];

  prod: any;
  message: any;
  constructor() {}
  GetAllProducts() {
    return this.ProductList;
  }
  GetProductbyID(proId: any) {
    if (!isNaN(proId)) {
      this.ProductList.forEach((element: any) => {
        if (element.Id == proId) {
          this.prod = element.Name;
        }
      });
      if (this.prod == null) {
        this.message = 'cant find this product';
        return this.message;
      } else {
        return this.prod;
      }
    }
  }
}
