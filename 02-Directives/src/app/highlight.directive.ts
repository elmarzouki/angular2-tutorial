import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

	constructor(private elementRef: ElementRef, private rederer: Renderer) {
		
		// style element on browser only
		// this.elementRef.nativeElement.style.backgroundColor = '#00ff6d';

		// best practice
		this.rederer.setElementStyle(this.elementRef.nativeElement, 'background-color', '#00ff6d');
	}

}
