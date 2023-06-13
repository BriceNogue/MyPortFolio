import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BiographyComponent } from './biography/biography.component';
import { ProjectsComponent } from './projects/projects.component';
import { LatestProgectsComponent } from './latest-progects/latest-progects.component';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    ProjectsComponent,
    LatestProgectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
