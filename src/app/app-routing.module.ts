import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SeccondPageComponent } from './seccond-page/seccond-page.component';

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent
  },
  {
    path: 'second',
    component: SeccondPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
