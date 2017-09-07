import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="user.name">
    <p>username: {{user.name}}</p>
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  user = { name: 'iSuperMostafa', password: 'password'};

  constructor() { }

  ngOnInit() {
  }

}
