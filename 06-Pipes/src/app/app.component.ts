import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	myValue: string = 'lowercase';
	myDate = new Date(2017,9,27);
	values = ['Milk', 'Bread', 'Beans'];
}
