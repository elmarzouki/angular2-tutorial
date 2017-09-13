import { Component } from '@angular/core';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <!-- nested routes -->
      <!-- <a [routerLink]="['user']">User</a> -->
      <a [routerLink]="['/user']">User</a>
      <a [routerLink]="['../']">Back to Home</a>
    `
})
export class UserComponent {
}
