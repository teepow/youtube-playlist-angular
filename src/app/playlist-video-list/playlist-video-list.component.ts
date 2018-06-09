import { Component, OnInit } from '@angular/core';
import {PlaylistVideoListService} from '../services/playlist-video-list.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-playlist-video-list',
  templateUrl: './playlist-video-list.component.html',
  styleUrls: ['./playlist-video-list.component.css']
})
export class PlaylistVideoListComponent implements OnInit {

  videoList = [];

  constructor(private playListVideoListService : PlaylistVideoListService,
              private router: Router
      ) {}

  ngOnInit() {
    this.playListVideoListService.videoList.subscribe((videoList) => {
        this.videoList = videoList;
    });

    this.videoList = JSON.parse(localStorage.getItem('thumbnail_urls'));
  }

  startPlaylist() {
    this.router.navigateByUrl('/playlist');
  }
}
