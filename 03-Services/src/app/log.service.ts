import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  writeToLog(message: string){
  	console.log(message);
  }

}
