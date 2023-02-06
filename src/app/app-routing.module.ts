import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';

const routes: Routes = [
  { path:"biogrphy", component: BiographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
