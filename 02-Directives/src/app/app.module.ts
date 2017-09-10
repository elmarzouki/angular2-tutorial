import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './Highlight/highlight.directive';
import { HoverDirective } from './Highlight/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
