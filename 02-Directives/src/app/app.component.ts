import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	private flag: Boolean = true;
	
	onSwitch() {
		this.flag = !this.flag;
	}
	
}
