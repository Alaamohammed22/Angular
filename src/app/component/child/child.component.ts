import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductserviceService } from 'src/app/services/productservice.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  productlist:any=[];
  productById:any=[];
  constructor(private productservise:ProductserviceService)
  {
this.productlist=this.productservise.GetAllProducts();
this.productById=this.productservise.GetProductbyID(1);
  }
  //ProductList: ProductsComponent = new ProductsComponent();

  @Output() childEvent = new EventEmitter();
  SendData() {
    this.childEvent.emit(this.productlist);
  }
  sayWelcome() {
    console.log('Welcome');
  }
}
