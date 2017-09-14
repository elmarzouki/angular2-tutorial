
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailComponent } from './user/user-detail.component';
import { HomeComponent } from './home.component';
import { UserDetailGuard } from './user/user-detail.guard'
import { UserEditGuard } from './user/user-edit.guard'

const userRoutes: Routes = [
	{ path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGuard] },
	{ path: 'edit', component: UserEditComponent, canDeactivate: [UserEditGuard] }
]

const appRoutes: Routes = [
  // redirect if the full path is user to /user/0 if
  { path: 'user', redirectTo: '/user/0', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'user/:id', component: UserComponent},
  { path: 'user/:id', component: UserComponent, children: userRoutes},
  // redirect any unkown paths to /user/0
  { path: '**', redirectTo: '/user/0', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);

