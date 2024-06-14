import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModuleModule } from "../FORMS/forms-module.module";

const childRoutes:Routes =[
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'cart', component: CartComponent },
]

@NgModule({
    declarations: [
        BlogComponent,
        ContactComponent,
        BuyComponent,
        CartComponent,
        FooterComponent,
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(childRoutes),
        HttpClientModule,
        FormsModuleModule
    ]
})
export class ChildModuleModule { }
