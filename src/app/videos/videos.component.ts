import { Component, OnInit } from '@angular/core';
import {VideoService} from '../services/video.service';
import {PlaylistService} from '../services/playlist.service';
import {Video} from '../models/video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video[];

  constructor(private videoService: VideoService,
              private playListService: PlaylistService
      ) {
  }

  ngOnInit() {
    this.videoService.videosSource.subscribe((videos) => {
       this.videos = videos;
    });
    this.videos = JSON.parse(localStorage.getItem('videos'));
  }

   addToPlaylist(video_id) {
      this.playListService.addToPlaylist(video_id);
    }
 }
