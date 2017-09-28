import { Component } from "@angular/core";

import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li [routerLink]="['signup']"><a>Sign Up</a></li>
                        <li [routerLink]="['signin']"><a>Sign In</a></li>
                        <li [routerLink]="['protected']"><a>Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent {

    constructor(private authService: AuthService) {}

    isAuth() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.logout();
    }
}
