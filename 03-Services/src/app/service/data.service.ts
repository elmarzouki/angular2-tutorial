import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class DataService {

	pushedData = new EventEmitter<String>();
	private data: string[] = [];
  	
  	constructor(private logService: LogService) { }

  	setData(str: string) { 
  		this.data.push(str);
  		this.logService.writeToLog('Saved item: ' + str);
  	}

  	getData() { return this.data; }

  	pushData(value: string) {
  		this.pushedData.emit(value);
  	}

}
