import { Component, OnInit } from '@angular/core';
import {VideoService} from '../services/video.service';
import {PlaylistService} from '../services/playlist.service';
import {PlaylistVideoListService} from '../services/playlist-video-list.service';
import {Video} from '../models/video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[];

  constructor(private videoService: VideoService,
              private playListService: PlaylistService,
              private playListVideoListService : PlaylistVideoListService
      ) {
  }

  ngOnInit() {
    this.videoService.videosSource.subscribe((videos) => {
       this.videos = videos;
    });
    this.videos = JSON.parse(localStorage.getItem('videos'));
  }

   addToPlaylist(video_id, thumbanail_url) {
      this.playListService.addToPlaylist(video_id);
      this.playListVideoListService.addToVideoList(thumbanail_url);
      this.playListVideoListService.addToVideoListLocalStorage(thumbanail_url);
    }
 }
