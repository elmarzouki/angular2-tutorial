import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <p>
      {{stringInterpolation}} | {{numberInterpolation}}
    </p>
  `,
  styles: []
})
export class DatabindingComponent implements OnInit {

  stringInterpolation = 'This is string interpolation!';
  numberInterpolation = 10;

  constructor() { }

  ngOnInit() {
  }

}
