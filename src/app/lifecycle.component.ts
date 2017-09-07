import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works! <span class="redFont">look at the Console!</span>
    </p>
    <ng-content></ng-content>
    <!-- LocalReferencViewChild is a local variable inside the template -->
    <p>original pragraph: </p><p #LocalReferencViewChild>{{bindable}}</p>
    <p>copycat pragraph - using local reference: </p><p>{{LocalReferencViewChild.textContent}}</p>
  `,
  styles: ['.redFont { color: red; }']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() bindable = "I'm bindable outside this component!";
    
    // to be accessed inside the class
    @ViewChild('LocalReferencViewChild') LocalReferencViewChild: HTMLElement;

    // access LocalReferencContentChild inside this class
    @ContentChild('LocalReferencContentChild') LocalReferencContentChild: HTMLElement; 

    constructor() { }

    ngOnInit() {
      console.log('OnInit called!');
    }

    ngOnChanges() {
      console.log('OnChanges called!');
    }

    ngDoCheck(){
      console.log('DoCheck called!');
    }

    ngAfterContentInit(){
      console.log('AfterContentInit called!');
    }

    ngAfterContentChecked(){
      console.log('AfterContentChecked called!');
      console.log(this.LocalReferencContentChild);
    }

    ngAfterViewInit(){
      console.log('AfterViewInit called!');
      console.log(this.LocalReferencViewChild);
    }

    ngAfterViewChecked(){
      console.log('AfterViewChecked called!');
    }

    ngOnDestroy(){
      console.log('OnDestroy called!');
    }

}
