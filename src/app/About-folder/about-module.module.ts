import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './about-dropdown/dropdown.component';
import { AboutComponent } from './about/about.component';
import { CertifcateComponent } from './certifcate/certifcate.component';
import { FeedbackComponent } from './feedback-component/feedback/feedback.component';
import { MembersComponent } from './members/members.component';
import { PpolicyComponent } from './ppolicy/ppolicy.component';
import { RouterModule } from '@angular/router';
import { FormsModuleModule } from '../FORMS/forms-module.module';
const aboutRoutes = [
  { path: 'dropdown', component: DropdownComponent },
  { path: 'about', component: AboutComponent },
  { path: 'certificate', component: CertifcateComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'members', component: MembersComponent },
  { path: 'ppolicy', component: PpolicyComponent },
]

@NgModule({
  declarations: [
    DropdownComponent,
    AboutComponent,
    CertifcateComponent,
    FeedbackComponent,
    MembersComponent,
    PpolicyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes),
    FormsModuleModule
  ],
  exports: [
    DropdownComponent,
    FeedbackComponent,
  ]
})
export class AboutModuleModule { }
