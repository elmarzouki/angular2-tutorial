import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

	private green: string = '#52be80';
	private lightGreen: string = '#07ea68';
	private backgroundColor: string = this.green;

	constructor(private elementRef: ElementRef, private rederer: Renderer) {

		// style element on browser only
		// this.elementRef.nativeElement.style.backgroundColor = '#52be80 ';

		// best practice
		this.rederer.setElementStyle(this.elementRef.nativeElement, 'background-color', this.backgroundColor);
	}
	
}