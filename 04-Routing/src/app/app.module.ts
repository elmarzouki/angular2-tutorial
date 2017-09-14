import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserDetailComponent } from './user/user-detail.component';
import { HomeComponent } from './home.component';
import { UserDetailGuard } from './user/user-detail.guard';
import { UserEditGuard } from './user/user-edit.guard';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    UserDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing 
  ],
  providers: [UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
