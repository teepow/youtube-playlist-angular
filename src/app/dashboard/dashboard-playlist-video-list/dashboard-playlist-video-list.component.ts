import { Component, OnInit } from '@angular/core';
import {DashboardPlaylistVideoListService} from './dashboard-playlist-video-list.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-playlist-video-list',
  templateUrl: './dashboard-playlist-video-list.component.html',
  styleUrls: ['./dashboard-playlist-video-list.component.css']
})
export class DashboardPlaylistVideoListComponent implements OnInit {

  visible = true;

  playlist = [];

  constructor(private playlistVideoListService : DashboardPlaylistVideoListService,
              private router: Router
      ) {}

  //subscribe to playlist and retreive playlist from local storage
  ngOnInit() {
    this.playlistVideoListService.playlist.subscribe((playlist) => {
        this.playlist = playlist;
    });
    this.playlist = JSON.parse(localStorage.getItem('playlist'));
  }

  startPlaylist() {
    let playlist_video_ids = this.getPlaylistVideoIds();
    localStorage.setItem('playlist_video_ids', playlist_video_ids);
    this.router.navigateByUrl('/playlist');
  }

  private getPlaylistVideoIds() {
    var playlist_video_ids = "";
    for(let i = 0; i < this.playlist.length; i++) {
      playlist_video_ids += (this.playlist[i].id + ",");
    }
    return playlist_video_ids;
  }

  removeItem(index) {
    this.removeFromLocalStorage(index);
    this.reIndexLocalStorageList();
    this.playlistVideoListService.removeFromObservable(index);
  }

  removeFromLocalStorage(index) {
      let playlist = JSON.parse(localStorage.getItem('playlist'));
      playlist.splice(index, 1);
      localStorage.setItem('playlist', JSON.stringify(playlist));
  }

  private reIndexLocalStorageList() {
    var playlist = this.playlistVideoListService.getPlaylistFromStorage();
    for(let i = 0; i < playlist.length; i++) {
      playlist[i].index = i;
    }
    localStorage.setItem('playlist', JSON.stringify(playlist));
  }

}
