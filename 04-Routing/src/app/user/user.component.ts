import { Component, OnDestroy } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";

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
      <hr>
      <p> user id: {{id}}</p>
    `
})
export class UserComponent implements OnDestroy{
	
	private subscription: Subscription; 
	id: string;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.subscription = activatedRoute.params.subscribe(
			(param: any) => this.id = param['id']
		);
	}

	onNavigate() {
		this.router.navigate(['/']);
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
