import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexpageComponent } from './flexpage/flexpage.component';
import { VideopageComponent } from './videopage/videopage.component';
import { HomeHealthComponent } from './home-health/home-health.component';
import { HomeClinicalComponent } from './home-clinical/home-clinical.component';
import { AssociationComponent } from './association/association.component';
import { AwardComponent } from './award/award.component';
import { NavHomeComponent } from './home-mid-navbar/nav-home/nav-home.component';
import { AboutModuleModule } from "../About-folder/about-module.module";

const childRoutes:Routes =[
  { path: '', component: HomeComponent },
]


@NgModule({
    declarations: [
        HomeComponent,
        FlexpageComponent,
        VideopageComponent,
        HomeHealthComponent,
        HomeClinicalComponent,
        AssociationComponent,
        AwardComponent,
        NavHomeComponent,
    ],
    exports: [
        NavHomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(childRoutes),
        AboutModuleModule
    ]
})
export class HomeModule { }
