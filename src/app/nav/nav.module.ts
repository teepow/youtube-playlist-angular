import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import {DragulaModule} from "ng2-dragula";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NavTopComponent } from './nav-top/nav-top.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { NavTopChannelSearchFormComponent } from './nav-top/nav-top-channel-search-form/nav-top-channel-search-form.component';
import { SubscriptionManagerComponent } from './nav-side/subscription-manager/subscription-manager.component';
import { SubscriptionManagerFoldersComponent } from './nav-side/subscription-manager/subscription-manager-folders/subscription-manager-folders.component';
import { SubscriptionManagerSubscriptionsComponent } from './nav-side/subscription-manager/subscription-manager-subscriptions/subscription-manager-subscriptions.component';
import { SubscriptionManagerAddFolderFormComponent } from './nav-side/subscription-manager/subscription-manager-add-folder-form/subscription-manager-add-folder-form.component';
import {AuthModule} from "../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    NgbModule,
    DragulaModule,
    FormsModule,
    AuthModule,
    TreeModule,
    BrowserAnimationsModule
  ],
  declarations: [
  NavTopComponent,
  NavSideComponent,
  NavTopChannelSearchFormComponent,
  SubscriptionManagerComponent,
  SubscriptionManagerFoldersComponent,
  SubscriptionManagerSubscriptionsComponent,
  SubscriptionManagerAddFolderFormComponent
  ],

  exports: [
  NavTopComponent,
  NavSideComponent,
  NavTopChannelSearchFormComponent,
  SubscriptionManagerComponent,
  SubscriptionManagerFoldersComponent,
  SubscriptionManagerSubscriptionsComponent,
  SubscriptionManagerAddFolderFormComponent,
]
})
export class NavModule { }
