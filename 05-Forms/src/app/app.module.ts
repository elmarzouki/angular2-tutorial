import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Template-Driven Approach 
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Data-Driven Approach


import { AppComponent } from './app.component';
// import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';



@NgModule({
  declarations: [
    AppComponent,
    // TemplateDrivenComponent
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule // Template-Driven Approach
    ReactiveFormsModule // Data-Driven Approach
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
