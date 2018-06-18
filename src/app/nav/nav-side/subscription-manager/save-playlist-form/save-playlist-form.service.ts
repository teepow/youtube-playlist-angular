import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Playlist} from './playlist';

@Injectable({
  providedIn: 'root'
})
export class SavePlaylistFormService {

  private playlistBaseUrl = 'http://127.0.0.1:8000/playlists';

  constructor(private http: HttpClient) {}

  savePlaylist(form) {
    this.http.post(this.playlistBaseUrl, form)
      .subscribe(response => console.log(response));
  }

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistBaseUrl);
  }

  deletePlaylist(playlist_id) {
    console.log(playlist_id);
    this.http.delete(this.playlistBaseUrl + '/' + playlist_id)
      .subscribe(response => console.log(response));
  }
}
