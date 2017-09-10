import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	private flag: Boolean = true;
	private numbers: Array<number> = [1, 2, 3, 4, 5];

	onSwitch() {
		this.flag = !this.flag;
	}

}
