import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardChannelComponent } from './dashboard/dashboard-channel/dashboard-channel.component';
import { DashboardVideosComponent } from './dashboard/dashboard-videos/dashboard-videos.component';
import { DashboardPlaylistComponent } from './dashboard/dashboard-playlist/dashboard-playlist.component';
import {WelcomeComponent} from './dashboard/welcome/welcome.component';
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {RequestResetComponent} from "./auth/password/request-reset/request-reset.component";
import {ResponseResetComponent} from "./auth/password/response-reset/response-reset.component";

import {BeforeLoginService as BeforeLogin} from "./auth/login/before-login.service";
import {AfterLoginService as AfterLogin} from "./auth/login/after-login.service";

const routes: Routes = [
  { path: 'channel', component: DashboardChannelComponent, canActivate: [AfterLogin] },
  { path: 'videos', component: DashboardVideosComponent, canActivate: [AfterLogin] },
  { path: 'playlist', component: DashboardPlaylistComponent, canActivate: [AfterLogin] },
  { path: 'login', component:  LoginComponent, canActivate: [BeforeLogin]},
  { path: 'signup', component:  SignupComponent, canActivate: [BeforeLogin]},
  { path: 'request-password-reset', component:  RequestResetComponent, canActivate: [BeforeLogin]},
  { path: 'response-password-reset', component:  ResponseResetComponent, canActivate: [BeforeLogin]},
  { path: 'welcome', component: WelcomeComponent, canActivate: [AfterLogin]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
