import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplatesStylesComponent } from './templates-styles.component';
import { DatabindingComponent } from './databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesStylesComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
