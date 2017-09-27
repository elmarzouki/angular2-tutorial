import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	dataResponse:string;
	dataResponseAfterPost: string;
	items: any[] = [];
	asyncString = this.httpService.getData(); // we don't need to subscribe here
												// because we are using async

	constructor(private httpService: HttpService) {}

	ngOnInit() {
	  	this.httpService.getData().subscribe(
	  		(data: any) => this.dataResponse = data
	  	);
	}

	onSubmit(username: string, email:String) {
		this.httpService.sendData({username: username, email:email})
		.subscribe(
			data => this.dataResponseAfterPost = data
		);
  	}
  	onGetData() {
  		this.httpService.getOwnData().subscribe(
  			data => {
  				const myArray = [];
  				for (let key in data){
  					myArray.push(data[key]);
  				}
  				this.items = myArray;
  			}
  		);
  	}
}
