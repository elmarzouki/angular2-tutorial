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
	// dataResponseAfterPost: string;

	constructor(private httpService: HttpService) {}

	ngOnInit() {
	  	this.httpService.getData().subscribe(
	  		(data: any) => this.dataResponse = data
	  	);
	}

	onSubmit(username: string, email:String) {
		this.httpService.sendData({username: username, email:email})
		.subscribe(
			data => console.log(data)
		);
  	}
}
