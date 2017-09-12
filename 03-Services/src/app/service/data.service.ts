import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	private data: string[] = [];
  	
  	constructor() { }

  	setData(str: string) { this.data.push(str); }

  	getData() { return this.data; }

}
