import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsDropdownComponent } from './solutions-dropdown/solutions-dropdown.component';
import { HomeSolutionComponent } from './home-solution/home-solution.component';
import { HomeHealthComponent } from './home-health/home-health.component';
import { ClinicalComponent } from './clinical/clinical.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MedicineComponent } from './medicine/medicine.component';
import { OccupationalComponent } from './occupational/occupational.component';
import { ResearchComponent } from './research/research.component';
import { TeleComponent } from './tele/tele.component';
import { RouterModule, Routes } from '@angular/router';

const solutionRoutes:Routes = [
  { path: 'home-solution', component: HomeSolutionComponent},
  { path: 'home-health', component: HomeHealthComponent},
  { path: 'clinical', component: ClinicalComponent},
  { path: 'tele', component: TeleComponent},
  { path: 'occupational', component:OccupationalComponent},
  { path: 'research', component:ResearchComponent},
  { path: 'insurance', component:InsuranceComponent},
  { path: 'medicine', component:MedicineComponent},
  
]

@NgModule({
  declarations: [
    SolutionsDropdownComponent,
    HomeSolutionComponent,
    HomeHealthComponent,
    ClinicalComponent,
    TeleComponent,
    OccupationalComponent,
    ResearchComponent,
    InsuranceComponent,
    MedicineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(solutionRoutes),
  ],
  exports: [
    SolutionsDropdownComponent,
  ]
})
export class SolutionModuleModule { }
