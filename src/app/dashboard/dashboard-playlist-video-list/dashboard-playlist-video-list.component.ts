import { Component, OnInit } from '@angular/core';
import {DashboardPlaylistVideoListService} from './dashboard-playlist-video-list.service';
import {Router} from "@angular/router";

import {DashboardPlaylistService} from "../dashboard-playlist/dashboard-playlist.service";

@Component({
  selector: 'app-playlist-video-list',
  templateUrl: './dashboard-playlist-video-list.component.html',
  styleUrls: ['./dashboard-playlist-video-list.component.css']
})
export class DashboardPlaylistVideoListComponent implements OnInit {

  visible = true;

  i = 0;

  videoList = [];

  constructor(private playListVideoListService : DashboardPlaylistVideoListService,
              private router: Router,
              private playListService : DashboardPlaylistService
      ) {}

  ngOnInit() {
    this.playListVideoListService.videoList.subscribe((videoList) => {
        this.videoList = videoList;
    });

    this.videoList = JSON.parse(localStorage.getItem('videoList'));
  }

  startPlaylist() {
    let playListString = this.getPlaylistString();
    localStorage.setItem('playList', playListString);
    this.router.navigateByUrl('/playlist');
  }

  private getPlaylistString() {
    var playList = "";
    for(let i = 0; i < this.videoList.length; i++) {
      playList += (this.videoList[i].id + ",");
    }
    return playList;
  }

  removeItem(index) {
    this.removeFromLocalStorage(index);
    this.reIndexLocalStorageList();
    this.playListVideoListService.removeFromObservable(index);
  }

  removeFromLocalStorage(index) {
      let videoList = JSON.parse(localStorage.getItem('videoList'));
      videoList.splice(index, 1);
      localStorage.setItem('videoList', JSON.stringify(videoList));
  }

  private reIndexLocalStorageList() {
    var videoList = this.playListVideoListService.getListFromStorage();
    for(let i = 0; i < videoList.length; i++) {
      videoList[i].index = i;
    }
    localStorage.setItem('videoList', JSON.stringify(videoList));
  }

}
