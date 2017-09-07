import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <label>Event Binding</label> <button (click)="onClicked()">Click me!</button>
    <label>Custom Event Binding</label> <button (click)="customOnClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClicked(){
    alert('this is an event binding!');
  }

  customOnClicked(){
    this.clicked.emit('This is a custom event binding!');
  }

}
