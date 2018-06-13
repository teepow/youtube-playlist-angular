import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";

/*
*PrimeNg
*/
import {CardModule} from 'primeng/card';

import { DashboardChannelComponent } from './dashboard-channel/dashboard-channel.component';
import { DashboardPlaylistComponent } from './dashboard-playlist/dashboard-playlist.component';
import { DashboardVideosComponent } from './dashboard-videos/dashboard-videos.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardPlaylistVideoListComponent} from "./dashboard-playlist-video-list/dashboard-playlist-video-list.component";

import { NavModule } from "../nav/nav.module";
import {AuthModule} from "../auth/auth.module";

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    RouterModule,
    AuthModule,
    //PrimeNg
    CardModule
  ],
  declarations: [
    DashboardComponent,
    DashboardChannelComponent,
    DashboardPlaylistComponent,
    DashboardVideosComponent,
    DashboardPlaylistVideoListComponent
    ],
  exports: [
    DashboardComponent,
    DashboardChannelComponent,
    DashboardPlaylistComponent,
    DashboardVideosComponent,
    DashboardPlaylistVideoListComponent
  ]
})
export class DashboardModule { }
