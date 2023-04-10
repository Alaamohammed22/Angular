import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './component/products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FullDemo';
  productlist: any = [];
  isclicked: boolean = false;

  @ViewChild(ProductsComponent) child!: ProductsComponent;
  getproducts() {
    this.productlist = this.child.renderValues();
    if(this.isclicked==false)
    {
      this.isclicked=true;
    }
    else{
      this.isclicked=false;
    }
  }
}
