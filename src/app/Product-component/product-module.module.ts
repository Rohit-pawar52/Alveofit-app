import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlveoairHomeComponent } from './alveoair-home/alveoair-home.component';
import { AlveoairClinicComponent } from './alveoair-clinic/alveoair-clinic.component';
import { AlveoPatientComponent } from './alveo-patient/alveo-patient.component';
import { AlveoProviderComponent } from './alveo-provider/alveo-provider.component';
import { AlveodotrComponent } from './alveodotr/alveodotr.component';
import { ProductDropdownComponent } from './product-dropdown/product-dropdown.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home-component/home.module';
import { HomepageComponent } from './product-home/homepage/homepage.component';
import { ProductEndComponent } from './product-home/product-end/product-end.component';

const productRoutes:Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'alveoair-clinic', component: AlveoairClinicComponent },
  { path: 'alveodotr', component: AlveodotrComponent },
  { path: 'alveo-patient', component: AlveoPatientComponent },
  { path: 'alveo-provider', component: AlveoProviderComponent },
]

@NgModule({
  declarations: [
    ProductDropdownComponent,
    AlveoairHomeComponent,
    AlveoairClinicComponent,
    AlveodotrComponent,
    AlveoPatientComponent,
    AlveoProviderComponent,
    HomepageComponent,
    ProductEndComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    HomeModule
  ],
  exports: [
    ProductDropdownComponent,
  ]
})
export class ProductModuleModule { }
