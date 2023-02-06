import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BiographyComponent } from './biography/biography.component';
import { LanguagesComponent } from './languages/languages.component';
import { Language } from './models/language.model';

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent,
    LanguagesComponent,
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
