import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
  	.ng-invalid {
  		border: 1px solid red;
  	}
  `]
})
export class TemplateDrivenComponent {

	user = { username: 'iSuperMostafa', email: 'isupermostafa@test.com', 
				password: 'test', gender: 'male' };
	genders = [ 'male', 'female']

	onSubmit(form: NgForm) {
		console.log(form);
		console.log(this.user);
		console.log(form.value);
	}
}
