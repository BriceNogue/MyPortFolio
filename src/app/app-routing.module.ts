import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { LanguagesComponent } from './languages/languages.component';

const routes: Routes = [
  { path:"biography", component: BiographyComponent },
  { path:"", redirectTo: "biography", pathMatch: "full" },
  { path:"languages", component: LanguagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
