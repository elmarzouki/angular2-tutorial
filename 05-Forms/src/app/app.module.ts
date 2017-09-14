import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Template-Driven Approach 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Template-Driven Approach 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
