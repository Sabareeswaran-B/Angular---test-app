import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccondPageComponent } from './seccond-page/seccond-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadModule } from 'angular2-signaturepad';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { RemoveAPipe } from './remove-a.pipe';
import { ShadowDirective } from './shadow.directive';
import { IntractionComponent } from './intraction/intraction.component';
import { IndicatorsModule, LoaderModule } from '@progress/kendo-angular-indicators';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RegisterComponent } from './register/register.component';
import { IconsModule } from '@progress/kendo-angular-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    SeccondPageComponent,
    FirstPageComponent,
    TwoWayBindingComponent,
    RemoveAPipe,
    ShadowDirective,
    IntractionComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,
    LoaderModule,
    IndicatorsModule,
    NotificationModule,
    BrowserAnimationsModule,
    LayoutModule,
    TooltipsModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  constructor() {
    library.add(faFilm as IconDefinition);
  }
}
