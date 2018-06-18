import { Component, OnInit } from '@angular/core';
import {DashboardVideoService} from './dashboard-video.service';
import {DashboardPlaylistService} from '../dashboard-playlist/dashboard-playlist.service';
import {DashboardPlaylistVideoListService} from '../dashboard-playlist-video-list/dashboard-playlist-video-list.service';
import {DashboardVideo} from './dashboard-video';


@Component({
  selector: 'app-videos',
  templateUrl: './dashboard-videos.component.html',
  styleUrls: ['./dashboard-videos.component.css']
})
export class DashboardVideosComponent implements OnInit {

  videos: DashboardVideo[];

  constructor(private videoService: DashboardVideoService,
              private playListService: DashboardPlaylistService,
              private playListVideoListService : DashboardPlaylistVideoListService
      ) {
  }

  ngOnInit() {
    this.videoService.videosSource.subscribe((videos) => {
       this.videos = videos;
    });
    this.videos = JSON.parse(localStorage.getItem('videos'));
  }

   addToPlaylist(video_id, thumbanail_url, video_title) {
      this.playListVideoListService.addToVideoList(thumbanail_url, video_title, video_id);
      this.playListVideoListService.addToVideoListLocalStorage(thumbanail_url, video_title, video_id);
    }
 }
