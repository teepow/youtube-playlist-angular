import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { SubscriptionManagerComponent } from './subscription-manager/subscription-manager.component';
import { AppRoutingModule } from './/app-routing.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RequestResetComponent } from './auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './auth/password/response-reset/response-reset.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionsComponent } from './subscription-manager/subscriptions/subscriptions.component';
import { FoldersComponent } from './subscription-manager/folders/folders.component';
import { FolderFormComponent } from './subscription-manager/folder-form/folder-form.component';
import { DragulaModule } from 'ng2-dragula';
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";


@NgModule({
  declarations: [
    AppComponent,
    SubscriptionManagerComponent,
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    NavbarComponent,
    DashboardComponent,
    SubscriptionsComponent,
    FoldersComponent,
    FolderFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SnotifyModule,
    NgbModule.forRoot(),
    DragulaModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,],

  bootstrap: [AppComponent]
})
export class AppModule { }
