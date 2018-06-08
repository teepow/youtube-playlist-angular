import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  public playList = "";

  constructor() { }

  addToPlaylist(video_id) {
      this.playList += (video_id + ",");
      console.log(this.playList);
  }
}
