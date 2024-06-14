import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support.component';

const supportRoutes: Routes =[
  { path: 'support', component: SupportComponent },
]

@NgModule({
  declarations: [
    SupportComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(supportRoutes),
  ],
  exports: [
    // SupportComponent
  ]
})
export class SupportModule { }
