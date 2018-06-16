import { Component, OnInit } from '@angular/core';
import {DashboardPlaylistVideoListService} from './dashboard-playlist-video-list.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-playlist-video-list',
  templateUrl: './dashboard-playlist-video-list.component.html',
  styleUrls: ['./dashboard-playlist-video-list.component.css']
})
export class DashboardPlaylistVideoListComponent implements OnInit {

  videoList = [];

  constructor(private playListVideoListService : DashboardPlaylistVideoListService,
              private router: Router
      ) {}

  ngOnInit() {
    this.playListVideoListService.videoList.subscribe((videoList) => {
        this.videoList = videoList;
        console.log(this.videoList);
    });

    this.videoList = JSON.parse(localStorage.getItem('thumbnail_urls'));
  }

  startPlaylist() {
    this.router.navigateByUrl('/playlist');
  }
}
