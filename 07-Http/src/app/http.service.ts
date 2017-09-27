import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
  	return this.http.get('https://angular2-tutorial-b2505.firebaseio.com/title.json')
  	.map((response: any) => response.json());
  }

  sendData(user: any) {
  	const body = JSON.stringify(user);
  	const headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('https://angular2-tutorial-b2505.firebaseio.com/data.json', body, {
  		headers: headers
  	})
  	.map((data: any) => data.json());
  }

  getOwnData() {
  	return this.http.get('https://angular2-tutorial-b2505.firebaseio.com/data.json')
  	.map((response: any) => response.json());
  }
}
