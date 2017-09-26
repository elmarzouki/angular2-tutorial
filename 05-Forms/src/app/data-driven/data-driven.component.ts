import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})


export class DataDrivenComponent {
	genders = ['male', 'female'];
    dataDrivenForm = new FormGroup({
    	'userData': new FormGroup({
    				'username': new FormControl('iSuperMostafa', Validators.required),
		'email': new FormControl('', [
			//angular2 built-in Validators: https://angular.io/api/forms/Validators
			Validators.required,
			Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
		
	}),
		'password': new FormControl('', Validators.required),
		'gender': new FormControl('male'),
		'hobbies': new FormArray([
			new FormControl('Cooking', Validators.required)
		])
	});


    onAddHobby() {
    	(<FormArray>this.dataDrivenForm.controls['hobbies']).push(new FormControl('', Validators.required));
    }

    onSubmit() {
    	console.log(this.dataDrivenForm);
    }
}
