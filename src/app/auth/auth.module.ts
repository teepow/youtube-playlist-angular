import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginComponent} from './login/login.component';
import {RequestResetComponent} from './password/request-reset/request-reset.component';
import {ResponseResetComponent} from './password/response-reset/response-reset.component';
import {SignupComponent} from './signup/signup.component';
import { AuthComponent } from './auth.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [
  LoginComponent,
  RequestResetComponent,
  ResponseResetComponent,
  SignupComponent,
  AuthComponent
  ],
  exports: [
  LoginComponent,
  RequestResetComponent,
  ResponseResetComponent,
  SignupComponent,
  AuthComponent
  ]
})
export class AuthModule { }
