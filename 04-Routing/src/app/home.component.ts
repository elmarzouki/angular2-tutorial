import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-home',
  template: `
    <h1>
      Home Component!
    </h1>
  `,
  styles: []
})
// {{param}}
export class HomeComponent implements OnDestroy {
  // private subscription: Subscription;

  // param: string;

  // constructor(private router: Router) {
  //   this.subscription = router.routerState.queryParams.subscribe(
  //     (queryParam: any) => this.param = queryParam['analytics']
  //   );
  // }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
