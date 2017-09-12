import { Component } from '@angular/core';

// we gonna use DataService in the main component
// to create one instance
// to create multiple instances 
// put the import  in each commponent
import  { DataService } from './data.service';

@Component({
    selector: 'si-service',
    template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,
  providers: [DataService],
})
export class ServiceComponent {
}
