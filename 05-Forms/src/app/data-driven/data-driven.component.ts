import { Component } from '@angular/core';
import { FormGroup, FormControl, 
	Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})


export class DataDrivenComponent {
	genders = ['male', 'female'];
	dataDrivenForm: FormGroup;

	// using form builder
	constructor(private formBuilder: FormBuilder){
		this.dataDrivenForm = formBuilder.group({
			'userData': formBuilder.group({
    			'username': ['iSuperMostafa', [Validators.required, this.exampleValidator]],
				'email': ['', [
					//angular2 built-in Validators: https://angular.io/api/forms/Validators
					Validators.required,
					Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
					]],
			}),
			'password': ['', Validators.required],
			'gender':['male'],
			'hobbies': formBuilder.array([
				['Cooking', Validators.required, this.asyncExampleValidator]
			])
		});

		this.dataDrivenForm.valueChanges.subscribe (
			(data: any) => console.log(data)
		);

		this.dataDrivenForm.statusChanges.subscribe (
			(data: any) => console.log(data)
		);
	}

	// without using form builder
 //    dataDrivenForm = new FormGroup({
 //    	'userData': new FormGroup({
 //    				'username': new FormControl('iSuperMostafa', Validators.required),
	// 	'email': new FormControl('', [
	// 		//angular2 built-in Validators: https://angular.io/api/forms/Validators
	// 		Validators.required,
	// 		Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
	// 		]),
		
	// 	}),
	// 	'password': new FormControl('', Validators.required),
	// 	'gender': new FormControl('male'),
	// 	'hobbies': new FormArray([
	// 		new FormControl('Cooking', Validators.required)
	// 	])
	// });


    onAddHobby() {
    	(<FormArray>this.dataDrivenForm.controls['hobbies'])
    	.push(new FormControl('', Validators.required, this.asyncExampleValidator));
    }

    onSubmit() {
    	console.log(this.dataDrivenForm);
    }


    exampleValidator(control: FormControl): {[s: string]: boolean} {
    	if(control.value === 'Example') {
    		return {example: true};
    	}
    	return null;
    }

    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    	const promise = new Promise<any>(
    		(resolve, reject) => {
    			setTimeout(() => {
    				if(control.value === 'Example') {
    					resolve({'invalid': true}); // you can type anthing here
    												// anything except null
    												// gonna make the function to fail
    				} else {
    					resolve(null);
    				}
    			}, 1500);
    		}
    	);
    	return promise;
    }
}
