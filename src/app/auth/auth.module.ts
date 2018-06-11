import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from "@angular/router";

import {LoginComponent} from './login/login.component';
import {RequestResetComponent} from './password/request-reset/request-reset.component';
import {ResponseResetComponent} from './password/response-reset/response-reset.component';
import {SignupComponent} from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
  LoginComponent,
  RequestResetComponent,
  ResponseResetComponent,
  SignupComponent
  ],
  exports: [
  LoginComponent,
  RequestResetComponent,
  ResponseResetComponent,
  SignupComponent
  ]
})
export class AuthModule { }
