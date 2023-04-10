import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Shared Classes and Types/Iproduct';
import { ICategory } from 'src/app/Shared Classes and Types/ICategory';
import { Discountoffers } from 'src/app/Shared Classes and Types/DiscountOffers';
import { ProductserviceService } from 'src/app/services/productservice.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  // Discount!: Discountoffers;
  // StoreName!: string;
  // StoreLogo!: string;
  // ProductList!: Iproduct[];
  // CategolyList!: ICategory[];
  // ClientName!: string;
  // IsPurshased!: boolean;

  constructor(private proservice:ProductserviceService) {
    // this.StoreName="aalalallala";
  }

  StoreName: string = 'Zara';
  StoreLogo: string = '../assets/Zara.jpg';
  Discount: Discountoffers = Discountoffers.fifteenperc;
  ProducttList: Iproduct[]=[];
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
  CategolyList: ICategory[] = [
    {
      Id: 1,
      Name: 'pants',
    },
    {
      Id: 2,
      Name: 'sweatshirts',
    },
    {
      Id: 3,
      Name: 'Dress',
    },
  ];
  ClientName: String = 'Alaa';
  IsPurshased: boolean = true;
  Username: boolean = false;
  Tablestatus: boolean = true;
  HideandShowName() {
    this.Tablestatus = false;
    this.Username = true;
  }

  renderValues(){
      return this.ProducttList =this.proservice.GetAllProducts();
  }

}
