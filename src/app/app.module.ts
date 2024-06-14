import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { ChildModuleModule } from './child-component/child-module.module';
import { SolutionModuleModule } from './Solutions-component/solution-module.module';
import { ProductModuleModule } from './Product-component/product-module.module';
import { AboutModuleModule } from './About-folder/about-module.module';
import { FormsModuleModule } from './FORMS/forms-module.module';
import { SupportModule } from './child-component/support/support.module';
import { HomeModule } from './home-component/home.module';
import * as amplitude from '@amplitude/analytics-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    ChildModuleModule,
    SolutionModuleModule,
    ProductModuleModule,
    AboutModuleModule,
    FormsModuleModule,
    SupportModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    amplitude.init('e8e7cf25900a1a49857a8562b6f139e1');
  }
  trackEvent(eventName: string) {
    amplitude.track(eventName);
  }
}
