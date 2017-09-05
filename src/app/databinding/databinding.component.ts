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
    <h2>Custom Property Binding</h2>
    <app-property-binding [foo]="100"></app-property-binding>
  `,
  styles: [ '.greenColor { color: green; }']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation: string = 'This is string interpolation!';
  numberInterpolation: number = 10;

  constructor() { }

  ngOnInit() {
  }

  onTest(){
    return true;
  }

}
