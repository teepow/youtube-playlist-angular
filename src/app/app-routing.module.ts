import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionManagerComponent } from './subscription-manager/subscription-manager.component';
import {LoginComponent} from "./login/login.component";
import {RequestResetComponent} from "./password/request-reset/request-reset.component";
import {ResponseResetComponent} from "./password/response-reset/response-reset.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  { path: 'folders', component: SubscriptionManagerComponent },
  { path: 'login', component:  LoginComponent},
  { path: 'signup', component:  SignupComponent},
  { path: 'request-password-reset', component:  RequestResetComponent},
  { path: 'response-password-reset', component:  ResponseResetComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
