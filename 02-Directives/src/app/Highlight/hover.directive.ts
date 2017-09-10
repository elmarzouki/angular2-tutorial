import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHover]'
})
export class HoverDirective {

	@Input() defaultColor: string = '#52be80';
	@Input() highlightColor: string = '#07ea68';
	private backgroundColor: string = null;

  	constructor() { }

	@HostListener('mouseenter') mouseenter() {
		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') mouseleave() {
		this.backgroundColor = this.defaultColor;
	}

	@HostBinding('style.backgroundColor') get setBackgroundColor() {
		return this.backgroundColor;
	}

	ngOnInit(){
		this.backgroundColor = this.defaultColor;
	}

	@HostListener('click', ['$event'])
	onClick(event) {
		console.log("Event Target" + event.target);
	}

}
