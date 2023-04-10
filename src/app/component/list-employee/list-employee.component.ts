import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Shared Classes and Types/Iproduct';
import { ProductserviceService } from 'src/app/services/productservice.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
})
export class ListEmployeeComponent {
  // employees = [
  //   { id: 1, name: 'alaa' },
  //   { id: 2, name: 'mohammed' },
  //   { id: 3, name: 'anas' },
  // ];
  products: Iproduct[] = [];
  product:any;
  constructor(private productservice: ProductserviceService)
  {
  }
  ngOnInit(): void {
     this.products = this.productservice.GetAllProducts();
     this.product=this.productservice.GetProductbyID(2);
  }
}
