import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionManagerComponent } from './subscription-manager/subscription-manager.component';
import {LoginComponent} from "./login/login.component";
import {RequestResetComponent} from "./password/request-reset/request-reset.component";
import {ResponseResetComponent} from "./password/response-reset/response-reset.component";
import {SignupComponent} from "./signup/signup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BeforeLoginService as BeforeLogin} from "./services/before-login.service";
import {AfterLoginService as AfterLogin} from "./services/after-login.service";

const routes: Routes = [
  { path: 'folders', component: SubscriptionManagerComponent, canActivate: [AfterLogin] },
  { path: 'login', component:  LoginComponent, canActivate: [BeforeLogin]},
  { path: 'signup', component:  SignupComponent, canActivate: [BeforeLogin]},
  { path: 'request-password-reset', component:  RequestResetComponent, canActivate: [BeforeLogin]},
  { path: 'response-password-reset', component:  ResponseResetComponent, canActivate: [BeforeLogin]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AfterLogin]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
