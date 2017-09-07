import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works! <span class="redFont">look at the Console!</span>
    </p>
    <ng-content></ng-content>
    <p>{{bindable}}</p>
  `,
  styles: ['.redFont { color: red; }']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() bindable = "I'm bindable outside this component!";
    
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
    }

    ngAfterViewInit(){
      console.log('AfterViewInit called!');
    }

    ngAfterViewChecked(){
      console.log('AfterViewChecked called!');
    }

    ngOnDestroy(){
      console.log('OnDestroy called!');
    }

}
