import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <!-- nested routes -->
      <!-- <a [routerLink]="['user']">User</a> -->
      <a [routerLink]="['/user']">User</a>
      <a [routerLink]="['../']">Back to Home</a>
      <!-- navigate from code -->
      <button (click)="onNavigate()">Go Home</button>
    `
})
export class UserComponent {
	
	constructor(private router: Router) {}

	onNavigate() {
		this.router.navigate(['/']);
	}
}
