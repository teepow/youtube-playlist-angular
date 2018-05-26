import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubscriptionManagerComponent } from './subscription-manager/subscription-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
