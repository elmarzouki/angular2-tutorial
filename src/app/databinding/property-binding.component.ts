import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    {{foo}}
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {
  
  @Input() foo: number =0;


  constructor() { }

  ngOnInit() {
  }

}
