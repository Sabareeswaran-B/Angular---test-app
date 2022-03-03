import { NgModule } from '@angular/core';
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
import { TestService } from './_services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    SeccondPageComponent,
    FirstPageComponent,
    TwoWayBindingComponent,
    RemoveAPipe,
    ShadowDirective,
    IntractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
