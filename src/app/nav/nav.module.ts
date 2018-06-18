import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragulaModule} from "ng2-dragula";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NavTopComponent } from './nav-top/nav-top.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { NavTopChannelSearchFormComponent } from './nav-side/subscription-manager/nav-top-channel-search-form/nav-top-channel-search-form.component';
import { SubscriptionManagerComponent } from './nav-side/subscription-manager/subscription-manager.component';
import { SubscriptionManagerAddFolderFormComponent } from './nav-side/subscription-manager/subscription-manager-add-folder-form/subscription-manager-add-folder-form.component';
import {AuthModule} from "../auth/auth.module";

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import { SavePlaylistFormComponent } from './nav-side/subscription-manager/save-playlist-form/save-playlist-form.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    NgbModule,
    DragulaModule,
    FormsModule,
    AuthModule,
    TreeModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [
  NavTopComponent,
  NavSideComponent,
  NavTopChannelSearchFormComponent,
  SubscriptionManagerComponent,
  SubscriptionManagerAddFolderFormComponent,
  SavePlaylistFormComponent
  ],

  exports: [
  NavTopComponent,
  NavSideComponent,
  NavTopChannelSearchFormComponent,
  SubscriptionManagerComponent,
  SubscriptionManagerAddFolderFormComponent,
]
})
export class NavModule { }
