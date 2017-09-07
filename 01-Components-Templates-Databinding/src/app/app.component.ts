import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redMessage: string = 'This message is red colored!';
  destroy: boolean = false;
  message: string = 'thisIsString';
  bind: string = 'bindable from lifecycle component can be changed here!';
}
