import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*
*PrimeNg
*/
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';


import { DashboardChannelComponent } from './dashboard-channel/dashboard-channel.component';
import { DashboardPlaylistComponent } from './dashboard-playlist/dashboard-playlist.component';
import { DashboardVideosComponent } from './dashboard-videos/dashboard-videos.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardPlaylistVideoListComponent} from "./dashboard-playlist-video-list/dashboard-playlist-video-list.component";

import { NavModule } from "../nav/nav.module";
import {AuthModule} from "../auth/auth.module";
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    RouterModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    //PrimeNg
    CardModule,
    ButtonModule,
    CarouselModule
  ],
  declarations: [
    DashboardComponent,
    DashboardChannelComponent,
    DashboardPlaylistComponent,
    DashboardVideosComponent,
    DashboardPlaylistVideoListComponent,
    WelcomeComponent
    ],
  exports: [
    DashboardComponent,
    DashboardChannelComponent,
    DashboardPlaylistComponent,
    DashboardVideosComponent,
    DashboardPlaylistVideoListComponent,
    WelcomeComponent
  ]
})
export class DashboardModule { }
