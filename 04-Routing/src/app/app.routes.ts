
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailComponent } from './user/user-detail.component';
import { HomeComponent } from './home.component';


const appRoutes: Routes = [
  { path: 'user', component: UserComponent},
  { path: '', component: HomeComponent},
  { path: 'user/:id', component: UserComponent}
]

export const routing = RouterModule.forRoot(appRoutes);