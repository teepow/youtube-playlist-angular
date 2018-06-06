import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import {LoginComponent} from "./auth/login/login.component";
import {RequestResetComponent} from "./auth/password/request-reset/request-reset.component";
import {ResponseResetComponent} from "./auth/password/response-reset/response-reset.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BeforeLoginService as BeforeLogin} from "./services/before-login.service";
import {AfterLoginService as AfterLogin} from "./services/after-login.service";

const routes: Routes = [
  { path: 'channel', component: ChannelComponent, canActivate: [AfterLogin] },
  { path: 'login', component:  LoginComponent, canActivate: [BeforeLogin]},
  { path: 'signup', component:  SignupComponent, canActivate: [BeforeLogin]},
  { path: 'request-password-reset', component:  RequestResetComponent, canActivate: [BeforeLogin]},
  { path: 'response-password-reset', component:  ResponseResetComponent, canActivate: [BeforeLogin]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
