import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <h2>String Interpolation</h2>
    <p>
      {{stringInterpolation}} | {{numberInterpolation}}
    </p>
    <hr>
    <h2>Property Binding</h2>
    <input type="text" name="" [value]="stringInterpolation">
    <p [ngClass]="{greenColor: onTest()}">Is this is colored?</p>
    <p [ngStyle]="{color: 'blue'}">Is this is colored?</p>
  `,
  styles: [ '.greenColor { color: green; }']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation = 'This is string interpolation!';
  numberInterpolation = 10;

  constructor() { }

  ngOnInit() {
  }

  onTest(){
    return true;
  }

}
