import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    dataDrivenForm = new FormGroup({
		'username': new FormControl(),
		'email': new FormControl(),
		'password': new FormControl()
	});

    onSubmit() {
    	console.log(this.dataDrivenForm);
    }
}
