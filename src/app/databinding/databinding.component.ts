import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
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

  onClicked(value:string){
    alert(value);
  }
}
