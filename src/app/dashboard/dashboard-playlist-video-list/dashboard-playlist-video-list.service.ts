import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DashboardPlaylistVideoListService {

  private playlistSource: BehaviorSubject<any> = new BehaviorSubject([]);

  playlist = this.playlistSource.asObservable();

  constructor() { }

  addToPlaylist(thumbnail_url, video_title, video_id) {
        let local_storage_playlist = this.getPlaylistFromStorage() || [];
        let videoJSON = this.getVideoJSON(thumbnail_url, video_title, local_storage_playlist.length, video_id);
        this.playlistSource.next(local_storage_playlist.concat(videoJSON));
  }

  addToPlaylistLocalStorage(thumbnail_url, video_title, video_id) {
      var playlist = [];
      if(this.listIsInStorage()) {
        playlist = this.getPlaylistFromStorage();
        let videoJSON = this.getVideoJSON(thumbnail_url, video_title, playlist.length, video_id);
        playlist.push(videoJSON);
      } else {
       playlist[0] = this.getVideoJSON(thumbnail_url, video_title, playlist.length, video_id);
      }
      localStorage.setItem('playlist', JSON.stringify(playlist));
  }

  private listIsInStorage() {
    return !!localStorage.getItem('playlist');
  }

  public getPlaylistFromStorage() {
    return JSON.parse(localStorage.getItem('playlist'));
  }

  public removeFromObservable(index) {
    this.playlistSource.next(this.getPlaylistFromStorage());
  }

  private getVideoJSON(thumbnail_url, video_title, index, video_id) {
    let videoJSON = {
      "thumbnail" : thumbnail_url,
      "title" : video_title,
      "id" : video_id,
      "index" : index
    }
    return videoJSON;
  }
}
