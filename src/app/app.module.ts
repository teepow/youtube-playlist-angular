import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { SubscriptionManagerComponent } from './subscription-manager/subscription-manager.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RequestResetComponent } from './auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './auth/password/response-reset/response-reset.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NoFolderSubsComponent } from './subscription-manager/no-folder-subs/no-folder-subs.component';
import { FoldersComponent } from './subscription-manager/folders/folders.component';


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
    NoFolderSubsComponent,
    FoldersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SnotifyModule,
    NgbModule.forRoot(),
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],

  bootstrap: [AppComponent]
})
export class AppModule { }
