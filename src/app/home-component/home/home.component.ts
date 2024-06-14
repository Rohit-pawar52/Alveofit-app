import { Component } from '@angular/core';
import { PopupService } from '../../FORMS/services/popup.service';
import { ProductService } from 'src/app/Product-component/product.service';
import * as amplitude from '@amplitude/analytics-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  product2: any;
  product3: any;
  constructor(private popupService: PopupService,
    private productService: ProductService
  ) {
    this.product2 = this.productService.products2;
    this.product3 = this.productService.products3;
  }

  trackpopup1(eventName: string) {
    amplitude.track(eventName); 
  }

  trackpopup2(eventName: string) {
    amplitude.track(eventName); 
  }

  openPopup1(): void {
    this.popupService.openPopupPatient();
    this.trackpopup1('openPopup1'); 

  }
  openPopup2(): void {
    this.popupService.openPopupProvider();
    this.trackpopup1('openPopup2'); 

  }
    
  tabOpen: boolean = false;

  toggleTab(event: MouseEvent) {
    event.preventDefault();
    this.tabOpen = !this.tabOpen;
  }
}
