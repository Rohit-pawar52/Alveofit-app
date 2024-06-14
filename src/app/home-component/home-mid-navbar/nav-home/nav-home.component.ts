import { Component } from '@angular/core';
import { ProductService } from 'src/app/Product-component/product.service';
@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent {
  product1: any;
  product2: any;
  product3: any;
  product4: any;
  product5: any;
  constructor(
    private productService: ProductService
  ) {
    this.product1 = this.productService.products1;
    this.product2 = this.productService.products2;
    this.product3 = this.productService.products3;
    this.product4 = this.productService.products4;
    this.product5 = this.productService.products5;
    this.tabOpen1 = true;
  }
  tabOpen1: boolean = false;
  tabOpen2: boolean = false;
  tabOpen3: boolean = false;

  toggleTab1(event: MouseEvent) {
    event.preventDefault(); // Prevent default navigation behavior
    this.tabOpen1 = true;
    this.tabOpen2 = false;
    this.tabOpen3 = false;
  }

  toggleTab2(event: MouseEvent) {
    event.preventDefault(); // Prevent default navigation behavior
    this.tabOpen1 = false;
    this.tabOpen2 = true;
    this.tabOpen3 = false;
  }

  toggleTab3(event: MouseEvent) {
    event.preventDefault(); // Prevent default navigation behavior
    this.tabOpen1 = false;
    this.tabOpen2 = false;
    this.tabOpen3 = true;
  }
}