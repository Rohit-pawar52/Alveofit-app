import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsepouchdbComponent } from './usepouchdb/usepouchdb.component';
const formsRoutes:Routes = [
  { path: 'patient-form', component: PatientFormComponent },
  { path: 'provider-form', component: ProviderFormComponent },
]

@NgModule({
  declarations: [
    UserInformationComponent,
    PatientFormComponent,
    ProviderFormComponent,
    UsepouchdbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(formsRoutes),
    ReactiveFormsModule,
  ],
  exports: [UserInformationComponent,
    UsepouchdbComponent
  ]
  
})
export class FormsModuleModule { }
