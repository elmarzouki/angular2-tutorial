/*
  created: ng g c TemplatesStyles --flat --is --it
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates-styles',
  template: `
    <h1>
      {{message}}
    </h1>
  `,
  styles: []
})
export class TemplatesStylesComponent implements OnInit {

  message = "This message ain't colored!";

  constructor() { }

  ngOnInit() {
  }

}
