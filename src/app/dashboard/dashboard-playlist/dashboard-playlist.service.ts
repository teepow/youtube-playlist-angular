import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardPlaylistService {

  public playList = "";

  constructor() { }

  addToPlaylist(video_id) {
      if(localStorage.getItem('playList')) {
          this.playList = localStorage.getItem('playList');
      }
      this.playList += (video_id + ",");
      localStorage.setItem('playList', this.playList);
  }
}
