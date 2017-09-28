import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './unprotected/signup.component';
import { SigninComponent } from './unprotected/signin.component';
import { ProtectedComponent } from './protected/protected.component';

const appRoutes = [
	{ path: '', redirectTo: '/signup', pathMatch: 'full' },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'protected', component: ProtectedComponent },
]

export const routing = RouterModule.forRoot(appRoutes);