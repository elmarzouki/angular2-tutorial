import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <label>username: </label>
    <input type="text" [(ngModel)]="user.name">
    <input type="text" [(ngModel)]="user.name">
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  user = { name: 'name', password: 'password'};

  constructor() { }

  ngOnInit() {
  }

}
