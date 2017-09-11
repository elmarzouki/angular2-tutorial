import { Component } from '@angular/core';

import  { LogService } from '../log.service';


@Component({
    selector: 'si-cmp-a',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  providers: [LogService]
})
export class CmpAComponent {
    value = '';
    items: string[] = [];

    constructor (private logSerivce: LogService) {}

    onLog(value: string) {
        this.logSerivce.writeToLog(value);
    }

    onStore(value: string) {
 
    }

    onGet() {
 
    }

    onSend(value: string) {
   
    }
    
}
