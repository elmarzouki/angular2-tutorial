import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class UserDetailGuard implements CanActivate {

	constructor() {}

	canActivate(
    	route: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot
  	): Observable<boolean>|Promise<boolean>|boolean {
		return confirm('Are you sure?');
	}
}