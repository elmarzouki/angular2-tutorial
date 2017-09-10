import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHover]'
})
export class HoverDirective {

	private green: string = '#52be80';
	private lightGreen: string = '#07ea68';
	private backgroundColor: string = this.green;

  	constructor() { }

	@HostListener('mouseenter') mouseenter() {
		this.backgroundColor = this.lightGreen;
	}

	@HostListener('mouseleave') mouseleave() {
		this.backgroundColor = this.green;
	}

	@HostBinding('style.backgroundColor') get setBackgroundColor() {
		return this.backgroundColor;
	}

	@HostListener('click', ['$event'])
	onClick(event) {
		console.log("Event Target" + event.target);
	}

}
