import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

/*
* Feature Modules
*/
import {NavModule} from './nav/nav.module';
import {DashboardModule} from "./dashboard/dashboard.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SnotifyModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    NavModule,
    DashboardModule,
    AuthModule,
    AngularFontAwesomeModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,],

  bootstrap: [AppComponent]
})
export class AppModule { }
